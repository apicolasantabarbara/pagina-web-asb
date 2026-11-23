/* ==========================================================
   Apícola Santa Bárbara — Mapa 3D de Chile + distribuidores
   ----------------------------------------------------------
   CÓMO EDITAR LOS DISTRIBUIDORES:
   - Cada región (clave ISO: biobio, metropolitana, etc.) tiene
     una lista de puntos de venta.
   - "logo": iniciales (máx. 2 letras) y dos colores para el
     degradado del círculo del logo.
   - "maps": dirección tal como se buscaría en Google Maps.
   - "whatsapp": número sin + ni espacios. "" si no tiene.
   - "instagram": usuario SIN @, o "" si no tiene.
   ========================================================== */

const REGIONES_ISO = {
  "CL-AP": "arica",
  "CL-TA": "tarapaca",
  "CL-AN": "antofagasta",
  "CL-AT": "atacama",
  "CL-CO": "coquimbo",
  "CL-VS": "valparaiso",
  "CL-RM": "metropolitana",
  "CL-LI": "ohiggins",
  "CL-ML": "maule",
  "CL-NU": "nuble",
  "CL-BI": "biobio",
  "CL-AR": "araucania",
  "CL-LR": "losrios",
  "CL-LL": "loslagos",
  "CL-AI": "aysen",
  "CL-MA": "magallanes"
};

/* EJEMPLOS DE FANTASÍA — reemplazar por la red real */
const DISTRIBUIDORES = {
  metropolitana: [
    {
      nombre: "Natura Gourmet",
      ciudad: "Providencia, Santiago",
      direccion: "Av. Providencia 2108, Local 5",
      maps: "Av. Providencia 2108, Santiago, Chile",
      whatsapp: "56912340001",
      instagram: "natura.gourmet",
      logo: { ini: "NG", from: "#5b8c3f", to: "#2e5c1e" }
    },
    {
      nombre: "La Despensa Real",
      ciudad: "Maipú, Santiago",
      direccion: "Av. Pajaritos 4560, Local B-12",
      maps: "Av. Pajaritos 4560, Maipú, Chile",
      whatsapp: "56912340002",
      instagram: "ladespensa.real",
      logo: { ini: "DR", from: "#c77f1a", to: "#8a5410" }
    }
  ],
  biobio: [
    {
      nombre: "Mielera del Sur",
      ciudad: "Concepción",
      direccion: "Av. Los Carrera 1140",
      maps: "Av. Los Carrera 1140, Concepción, Chile",
      whatsapp: "56912340003",
      instagram: "mielera.delsur",
      logo: { ini: "MS", from: "#e8a13a", to: "#b06d10" }
    },
    {
      nombre: "Dulce Colmena",
      ciudad: "Los Ángeles",
      direccion: "Caupolicán 356",
      maps: "Caupolicán 356, Los Ángeles, Chile",
      whatsapp: "56912340004",
      instagram: "dulce.colmena.cl",
      logo: { ini: "DC", from: "#3f7d8c", to: "#1e4c5c" }
    }
  ],
  loslagos: [
    {
      nombre: "Sabores del Lago",
      ciudad: "Puerto Varas",
      direccion: "Del Salvador 210",
      maps: "Del Salvador 210, Puerto Varas, Chile",
      whatsapp: "56912340005",
      instagram: "saboresdellago",
      logo: { ini: "SL", from: "#8c5ba8", to: "#4e2e6e" }
    },
    {
      nombre: "Mundo Verde",
      ciudad: "Puerto Montt",
      direccion: "Urmeneta 719",
      maps: "Urmeneta 719, Puerto Montt, Chile",
      whatsapp: "56912340006",
      instagram: "mundoverde.pm",
      logo: { ini: "MV", from: "#4a7c3f", to: "#27451f" }
    }
  ]
};

/* ---------- Carga del mapa y lógica ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const mapHost = document.getElementById("chileMap");
  const logosWrap = document.getElementById("distLogos");
  const infoWrap = document.getElementById("distInfo");
  const regionTitle = document.getElementById("distRegionTitle");
  const storesLabel = document.getElementById("distStoresLabel");
  if (!mapHost) return;

  const lang = () => document.documentElement.lang || "es";
  let svgEl = null;
  let pinEl = null;
  let tipEl = null;
  let currentRegion = null;

  fetch("assets/chile.svg")
    .then(r => r.text())
    .then(text => {
      const doc = new DOMParser().parseFromString(text, "image/svg+xml");
      svgEl = doc.querySelector("svg");
      if (!svgEl) return;

      // Recortar al territorio continental: el SVG geo-calibrado
      // incluye Isla de Pascua a la izquierda (x 0-460) — el país
      // continental ocupa x ~472-620.
      // Rotamos -90° dentro del SVG para que Chile quede
      // horizontal (norte a la izquierda) y comprimimos el eje
      // largo (.55) para una proporción panorámica compacta.
      svgEl.removeAttribute("width");
      svgEl.removeAttribute("height");
      svgEl.setAttribute("viewBox", "-4 -2 716 162");
      svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
      svgEl.classList.add("chile3d");

      const NS = "http://www.w3.org/2000/svg";
      const gMain = document.createElementNS(NS, "g");
      gMain.setAttribute("transform", "translate(0 626) scale(1 1) rotate(-90)");
      Array.from(svgEl.querySelectorAll("path")).forEach(p => gMain.appendChild(p));
      svgEl.appendChild(gMain);

      // Paleta tipo ilustración: colores vivos por región
      const PALETA = ["#e8a13a", "#2e8f8a", "#d9534f", "#8a6f4d",
                      "#c9a227", "#3f7d8c", "#a04b3a", "#6b8f3f"];

      // Las 5 regiones más pequeñas se agrandan un 25% alrededor
      // de su propio centro para que sean fáciles de pinchar
      const PEQUENAS = { nuble: 1.25, metropolitana: 1.3, ohiggins: 1.25, valparaiso: 1.25, arica: 1.25 };

      // Preparar regiones
      let ci = 0;
      Array.from(gMain.querySelectorAll("path")).forEach(p => {
        const iso = p.id;
        const rid = REGIONES_ISO[iso];
        if (!rid) { p.remove(); return; }
        // Valparaíso arrastra Isla de Pascua como último subpath:
        // se corta para que no aparezca flotando fuera del continente
        if (rid === "valparaiso") {
          const segs = p.getAttribute("d").split(/(?=[Mm])/);
          if (segs.length > 1) p.setAttribute("d", segs.slice(0, -1).join(""));
        }
        p.removeAttribute("style");
        p.style.fill = PALETA[ci++ % PALETA.length];
        const hasDist = (DISTRIBUIDORES[rid] || []).length > 0;
        p.setAttribute("class", "region" + (hasDist ? " has-dist" : " no-dist"));
        p.dataset.region = rid;
        p.setAttribute("role", "button");
        p.setAttribute("tabindex", "0");
        p.addEventListener("click", () => selectRegion(rid));
        p.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectRegion(rid); }
        });

        p.dataset.grow = PEQUENAS[rid] || "";
      });

      mapHost.appendChild(svgEl);

      // Envolver regiones pequeñas en un <g> que las agranda
      // alrededor de su propio centro (el hover va por el path,
      // así el CSS de levantar sigue funcionando)
      gMain.querySelectorAll("path[data-grow]").forEach(p => {
        const s = parseFloat(p.dataset.grow);
        if (!s) return;
        try {
          const b = p.getBBox();
          const cx = b.x + b.width / 2, cy = b.y + b.height / 2;
          const wrap = document.createElementNS(NS, "g");
          wrap.setAttribute("transform",
            `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`);
          gMain.insertBefore(wrap, p);
          wrap.appendChild(p);
        } catch (e) { /* getBBox no disponible: se omite */ }
      });

      // El pin vive dentro del grupo escalado (coordenadas de región)
      window.__pinGroup = gMain;

      // Tooltip con el nombre de la región al pasar el puntero
      const sceneEl = document.querySelector(".map3d-scene");
      tipEl = document.createElement("div");
      tipEl.className = "map-tip";
      if (sceneEl) sceneEl.appendChild(tipEl);

      svgEl.addEventListener("mousemove", e => {
        const p = e.target.closest ? e.target.closest(".region") : null;
        if (!p || !tipEl) { if (tipEl) tipEl.classList.remove("show"); return; }
        tipEl.textContent = regionName(p.dataset.region);
        const r = sceneEl.getBoundingClientRect();
        tipEl.style.left = (e.clientX - r.left) + "px";
        tipEl.style.top = (e.clientY - r.top) + "px";
        tipEl.classList.add("show");
      });
      svgEl.addEventListener("mouseleave", () => tipEl && tipEl.classList.remove("show"));
    })
    .catch(() => {
      mapHost.innerHTML = "<p style='color:#6f6455'>Mapa no disponible</p>";
    });

  function regionName(rid) {
    const dict = (typeof i18n !== "undefined") ? i18n[lang()] : null;
    return (dict && dict["region." + rid]) || rid;
  }

  // Clic fuera de regiones/logos/ficha → el mapa vuelve a cero
  function resetMap() {
    if (!svgEl) return;
    currentRegion = null;
    svgEl.querySelectorAll(".region.active").forEach(p => p.classList.remove("active"));
    if (pinEl) { pinEl.remove(); pinEl = null; }
    const scene = document.querySelector(".map3d-scene");
    if (scene) scene.classList.remove("open");
    logosWrap.innerHTML = "";
    infoWrap.innerHTML = "";
  }
  document.addEventListener("click", e => {
    if (!currentRegion) return;
    if (e.target.closest(".region") ||
        e.target.closest(".dist-dock") ||
        e.target.closest(".dist-float")) return;
    resetMap();
  });

  function selectRegion(rid) {
    currentRegion = rid;
    if (svgEl) {
      svgEl.querySelectorAll(".region").forEach(p =>
        p.classList.toggle("active", p.dataset.region === rid));
      movePin(rid);
    }
    const scene = document.querySelector(".map3d-scene");
    if (scene) scene.classList.add("open");
    renderLogos(rid);
  }

  function movePin(rid) {
    const path = svgEl.querySelector(`.region[data-region="${rid}"]`);
    if (!path) return;
    const b = path.getBBox();
    const cx = b.x + b.width / 2;
    const cy = b.y + b.height / 2;
    const NS = "http://www.w3.org/2000/svg";

    if (!pinEl) {
      pinEl = document.createElementNS(NS, "g");
      pinEl.setAttribute("class", "map-pin");
      pinEl.innerHTML = `
        <circle class="pin-ring" r="14"/>
        <circle class="pin-dot" r="5.5"/>`;
      (window.__pinGroup || svgEl).appendChild(pinEl);
    }
    pinEl.setAttribute("transform", `translate(${cx} ${cy})`);
    pinEl.classList.remove("pin-pop");
    void pinEl.getBBox(); // reiniciar animación
    pinEl.classList.add("pin-pop");
  }

  function renderLogos(rid) {
    const dict = i18n[lang()];
    const lista = DISTRIBUIDORES[rid] || [];
    regionTitle.textContent = regionName(rid);
    storesLabel.textContent = lista.length ? dict["dist.stores"] : dict["dist.empty"];
    logosWrap.innerHTML = "";
    infoWrap.innerHTML = "";

    lista.forEach((d, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dist-logo";
      btn.setAttribute("aria-label", d.nombre);
      btn.innerHTML = `
        <span class="logo-circle" style="background:linear-gradient(135deg,${d.logo.from},${d.logo.to})">${d.logo.ini}</span>
        <span class="logo-name">${d.nombre}</span>`;
      btn.addEventListener("click", () => toggleInfo(d, btn));
      logosWrap.appendChild(btn);
    });
  }

  function toggleInfo(d, btn) {
    const dict = i18n[lang()];
    const wasOpen = btn.classList.contains("active");
    logosWrap.querySelectorAll(".dist-logo").forEach(b => b.classList.remove("active"));
    infoWrap.innerHTML = "";
    if (wasOpen) return;

    btn.classList.add("active");
    const mapsUrl = "https://www.google.com/maps/search/" + encodeURIComponent(d.maps);
    const waUrl = d.whatsapp ? `https://wa.me/${d.whatsapp}` : null;
    const igUrl = d.instagram ? `https://instagram.com/${d.instagram}` : null;

    const card = document.createElement("div");
    card.className = "dist-card-open";
    card.innerHTML = `
      <div class="dist-card-head">
        <span class="logo-circle small" style="background:linear-gradient(135deg,${d.logo.from},${d.logo.to})">${d.logo.ini}</span>
        <div>
          <strong>${d.nombre}</strong>
          <small>${d.ciudad}</small>
        </div>
      </div>
      <p class="dist-addr">${d.direccion}</p>
      <div class="dist-links">
        <a href="${mapsUrl}" target="_blank" rel="noopener" class="dist-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3z"/><path d="M9 7v13M15 4v13"/></svg>
          ${dict["dist.howto"]}
        </a>
        ${waUrl ? `<a href="${waUrl}" target="_blank" rel="noopener" class="dist-link">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.9a11.7 11.7 0 0 0 4.6 4.3c1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.7-.4z"/></svg>
          WhatsApp
        </a>` : ""}
        ${igUrl ? `<a href="${igUrl}" target="_blank" rel="noopener" class="dist-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
          Instagram
        </a>` : ""}
      </div>`;
    infoWrap.appendChild(card);
  }

  window.addEventListener("asb:langchange", () => {
    if (currentRegion) renderLogos(currentRegion);
  });
});
