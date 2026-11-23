/* Apícola Santa Bárbara — main.js
   Bilingüe ES/EN, animaciones al hacer scroll, contadores y menú móvil */

const i18n = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.companies": "Nuestras empresas",
    "nav.products": "Productos",
    "nav.quality": "Calidad",
    "nav.markets": "Mercados",
    "nav.gallery": "Galería",
    "nav.buy": "Dónde comprar",
    "nav.contact": "Contacto",
    "hero.tag": "Exportadora apícola · Santa Bárbara, Biobío, Chile",
    "hero.title": "Miel chilena de origen puro,<br><em>del Biobío al mundo.</em>",
    "hero.sub": "Exportamos miel premium a granel a la Unión Europea y material genético apícola de excelencia. Próximo destino: nuestras reinas y paquetes de abejas a Canadá.",
    "hero.cta1": "Conocer productos",
    "hero.cta2": "Hablemos de negocios",
    "stats.gen": "Generación apícola familiar",
    "stats.beekeepers": "Apicultores de la red local",
    "stats.drums": "Tambores de miel exportada a granel",
    "stats.cert": "Planta certificada estándar UE",
    "about.eyebrow": "Quiénes somos",
    "about.title": "Una tradición familiar con visión global",
    "about.p1": "Apícola Santa Bárbara es una empresa de tercera generación con más de 30 años en el rubro, iniciada por nuestros abuelos y padres. Hoy la formalizamos nosotros, innovando en los manejos y buenas prácticas e incorporando tecnología y automatización en nuestros procesos.",
    "about.p2": "Nos ubicamos en la comuna de Santa Bárbara, Capital Nacional de la Miel, Región del Biobío — reconocida nacional e internacionalmente por la producción de mieles de excelente calidad. Trabajamos junto a agrupaciones de pequeños apicultores (P.A.P. INDAP, AGs apícolas y cooperativas), entregándoles herramientas y capacitación.",
    "about.p3": "Trasladamos nuestros planteles apícolas por las distintas floraciones del país para obtener el néctar de los bosques nativos del centro-sur: tineo, quillay, tiaca, ulmo y avellano chileno — especies en su mayoría autóctonas y únicas en el mundo, que se traducen en mieles de calidad exclusiva que heredan las propiedades de su floración.",
    "about.floraTitle": "Nuestras mieles monoflorales",
    "about.floraSub": "Del bosque nativo chileno",
    "about.floraNote": "Cada variedad conserva el color, aroma, sabor y textura de su floración original.",
    "comp.eyebrow": "Una familia, dos empresas",
    "comp.title": "De Santa Bárbara al mundo",
    "comp.sub": "La misma familia opera dos compañías con roles distintos que se complementan: una produce y abastece Chile, la otra nos abre las fronteras.",
    "comp.bridge": "misma familia<br>misma calidad",
    "comp.asb.tag": "Operación nacional",
    "comp.asb.title": "Apícola Santa Bárbara SpA",
    "comp.asb.desc": "Es el corazón productivo: gestiona nuestros apiarios, la red de apicultores locales, la planta de acopio y envasado, y la venta de miel fraccionada en tiendas de todo Chile. Aquí nace cada frasco y cada tambor.",
    "comp.asb.l1": "Producción, acopio y envasado",
    "comp.asb.l2": "Distribución nacional y punto de venta",
    "comp.asb.l3": "Trabajo con apicultores y programas P.A.P. (INDAP)",
    "comp.sss.tag": "Brazo exportador",
    "comp.sss.title": "Inversiones San Sebastián",
    "comp.sss.desc": "Es nuestra compañía de exportación: a través de ella embarcamos la miel a granel y el material genético apícola hacia mercados internacionales — hoy Alemania y la Unión Europea; próximamente Canadá.",
    "comp.sss.l1": "Embarques de miel en tambores y contenedores",
    "comp.sss.l2": "Reinas y paquetes de abejas al mundo",
    "comp.sss.l3": "Gestión comercial y documentación internacional",
    "products.eyebrow": "Vitrina de exportación",
    "products.title": "Dos líneas, un mismo estándar de excelencia",
    "products.bg": "Nacionales · Internacionales",
    "products.honey.badge": "Presentes en todo Chile",
    "products.honey.title": "Nuestra miel",
    "products.honey.desc": "Miel fraccionada 100% natural del bosque nativo, presente en cadenas de supermercados, tiendas gourmet y negocios locales de todo el país. Además, enviamos directo a cualquier comuna de Chile.",
    "products.honey.s1": "Supermercados, tiendas gourmet y negocios locales",
    "products.honey.s2": "Envíos directos a todo Chile y venta en Walmart.cl",
    "products.honey.s3": "Mieles monoflorales: Ulmo, Tineo, Tiaca, Quillay, Avellano",
    "products.honey.cta": "Dónde comprar →",
    "products.geno.badge": "Exportación · UE y Canadá",
    "products.geno.title": "Miel a granel y material genético",
    "products.geno.desc": "A través de San Sebastián exportamos miel en tambores de 300 kg a Alemania y la Unión Europea, y abrimos la ruta de abejas reinas seleccionadas y paquetes de abejas a Canadá.",
    "products.geno.s1": "Miel monofloral en tambores de 300 kg y contenedores",
    "products.geno.s2": "Reinas fecundadas y paquetes de abejas",
    "products.geno.s3": "Trazabilidad por lote y sanidad certificada",
    "quality.eyebrow": "Calidad y trazabilidad",
    "quality.title": "La calidad que piden los mercados más exigentes",
    "quality.i1.title": "Planta con resolución sanitaria y aprobación SAG",
    "quality.i1.desc": "Sala de proceso habilitada bajo las pautas del Servicio Agrícola y Ganadero para exportación a la Unión Europea. Cumpliendo las pautas para exportación a la Unión Europea.",
    "quality.i2.title": "Trazabilidad por lote",
    "quality.i2.desc": "Cada tambor es clasificado por origen floral, apicultor y parámetros de calidad, con registro completo desde la colmena.",
    "quality.i3.title": "Análisis de calidad",
    "quality.i3.desc": "Control de humedad, HMF, pureza floral y parámetros organolépticos antes de cada embarque.",
    "quality.i4.title": "Respaldo institucional",
    "quality.i4.desc": "Vinculación con ProChile para apertura de mercados y cumplimiento de protocolos internacionales.",
    "markets.eyebrow": "Presencia internacional",
    "markets.title": "Rutas de exportación activas y en apertura",
    "markets.de.title": "Alemania · Unión Europea",
    "markets.de.desc": "Miel a granel en contenedores completos. Primera exportación directa desde Santa Bárbara, con embarques continuos.",
    "markets.ca.title": "Canadá",
    "markets.ca.desc": "Apertura de mercado para material genético: abejas reinas y paquetes de abejas para la industria apícola canadiense.",
    "markets.active": "Activo",
    "markets.opening": "Próximamente",
    "markets.note": "Chile exporta entre 4.000 y 5.000 toneladas de miel al año; Europa es el destino principal. La sanidad apícola chilena — con manejo certificado y zonas de alta pureza — posiciona al país como proveedor emergente de material genético.",
    "gal.eyebrow": "Nuestro trabajo en imágenes",
    "gal.title": "Apiarios, mieles y personas",
    "gal.sub": "Del manejo de colmenas en bosques nativos a la sala de envasado: así se hace nuestra miel, temporada a temporada.",
    "gal.cap1": "Apiario en la precordillera",
    "gal.cap2": "Mieles de Tineo, Tiaca y Quillay",
    "gal.cap3": "Manejo de colmenas",
    "gal.cap4": "Marcos operculados de miel",
    "gal.cap5": "Jornadas con apicultores locales",
    "gal.cap6": "Floración de ulmo, bosque nativo",
    "gal.cap7": "Revisión de cuadros en plena producción",
    "gal.cap8": "Temporada 2025",
    "gal.alt1": "Apiario con colmenas de colores al pie de la montaña",
    "gal.alt2": "Frascos de miel de Tineo, Tiaca y Quillay",
    "gal.alt3": "Apicultor con traje amarillo sosteniendo un marco",
    "gal.alt4": "Apicultor cepillando un marco con miel",
    "gal.alt5": "Grupo de apicultores con trajes blancos en el bosque",
    "gal.alt6": "Floración blanca de ulmo en bosque nativo",
    "gal.alt7": "Apicultor revisando cuadros entre colmenas de colores",
    "gal.alt8": "Fotografía de la temporada 2025",
    "dist.eyebrow": "Venta nacional",
    "dist.title": "Busca tu miel",
    "dist.sub": "Más de 50 puntos de venta entre Iquique y Puerto Montt, y venta online a todo Chile.",
    "dist.hint": "¡Selecciona tu región!",
    "dist.stores": "Distribuidores en esta región",
    "dist.empty": "Aún sin distribuidores aquí — ¿quieres ser el primero?",
    "dist.howto": "Cómo llegar",
    "dist.walmart.title": "También en Walmart.cl",
    "dist.walmart.desc": "Encuentra nuestros formatos de venta al público en la tienda online de Walmart, con despacho a todo Chile.",
    "dist.become.title": "¿Quieres ser nuestro distribuidor?",
    "dist.become.desc": "Si tienes una tienda o local comercial y quieres vender miel Apícola Santa Bárbara, conversemos.",
    "region.tarapaca": "Tarapacá",
    "region.antofagasta": "Antofagasta",
    "region.atacama": "Atacama",
    "region.coquimbo": "Coquimbo",
    "region.valparaiso": "Valparaíso",
    "region.metropolitana": "Metropolitana",
    "region.ohiggins": "O'Higgins",
    "region.maule": "Maule",
    "region.nuble": "Ñuble",
    "region.biobio": "Biobío",
    "region.araucania": "La Araucanía",
    "region.losrios": "Los Ríos",
    "region.loslagos": "Los Lagos",
    "region.arica": "Arica y Parinacota",
    "region.aysen": "Aysén",
    "region.magallanes": "Magallanes",
    "contact.eyebrow": "Contacto comercial",
    "contact.title": "Conversemos sobre su próxima importación",
    "contact.desc": "Si usted importa miel a granel, busca mieles monoflorales de origen certificado o requiere material genético apícola, escríbanos. Respondemos en español e inglés.",
    "contact.addr": "Salamanca 471, Santa Bárbara<br>Hijuela El Quillay, Sector Los Álamos (planta)",
    "form.name": "Nombre / Empresa",
    "form.email": "Correo electrónico",
    "form.interest": "Interés",
    "form.opt0": "Elige una opción",
    "form.opt1": "Miel a granel (exportación)",
    "form.opt2": "Material genético — reinas / paquetes",
    "form.opt4": "Comprar miel fraccionada (Chile)",
    "form.opt5": "Quiero ser distribuidor",
    "form.opt3": "Otro",
    "form.msg": "Mensaje",
    "form.send": "Enviar mensaje",
    "form.sent": "Abriendo su correo para enviar el mensaje…",
    "footer.tag": "Miel chilena y material genético apícola para el mundo."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.companies": "Our companies",
    "nav.products": "Products",
    "nav.quality": "Quality",
    "nav.markets": "Markets",
    "nav.gallery": "Gallery",
    "nav.buy": "Where to buy",
    "nav.contact": "Contact",
    "hero.tag": "Beekeeping exporter · Santa Bárbara, Biobío, Chile",
    "hero.title": "Pure-origin Chilean honey,<br><em>from Biobío to the world.</em>",
    "hero.sub": "We export premium bulk honey to the European Union and excellent bee genetic material. Next destination: our queen bees and bee packages to Canada.",
    "hero.cta1": "Explore products",
    "hero.cta2": "Let's talk business",
    "stats.gen": "Generation of family beekeeping",
    "stats.beekeepers": "Local beekeepers in our network",
    "stats.drums": "Bulk honey drums exported",
    "stats.cert": "EU-standard certified plant",
    "about.eyebrow": "About us",
    "about.title": "A family tradition with global vision",
    "about.p1": "Apícola Santa Bárbara is a third-generation company with more than 30 years in the business, started by our grandparents and parents. Today we run it formally, innovating in management and good practices while incorporating technology and automation into our processes.",
    "about.p2": "We are located in the commune of Santa Bárbara, the National Capital of Honey, Biobío Region — recognized nationally and internationally for producing excellent-quality honey. We work with groups of small beekeepers (P.A.P. INDAP, beekeeping AGs and cooperatives), providing them with tools and training.",
    "about.p3": "We move our beekeeping operations across the country's different blooms to gather nectar from the native forests of south-central Chile: tineo, quillay, tiaca, ulmo and Chilean hazel — mostly native species unique in the world, producing honeys of exclusive quality that inherit the properties of their blossoms.",
    "about.floraTitle": "Our monofloral honeys",
    "about.floraSub": "From the Chilean native forest",
    "about.floraNote": "Each variety keeps the color, aroma, flavor and texture of its original bloom.",
    "comp.eyebrow": "One family, two companies",
    "comp.title": "From Santa Bárbara to the world",
    "comp.sub": "The same family runs two companies with complementary roles: one produces and supplies Chile, the other opens borders for us.",
    "comp.bridge": "same family<br>same quality",
    "comp.asb.tag": "National operation",
    "comp.asb.title": "Apícola Santa Bárbara SpA",
    "comp.asb.desc": "The productive heart: it runs our apiaries, the local beekeeper network, the collection and packing plant, and retail honey sales in stores across Chile. Every jar and every drum is born here.",
    "comp.asb.l1": "Production, collection and packing",
    "comp.asb.l2": "Nationwide distribution and point of sale",
    "comp.asb.l3": "Work with beekeepers and P.A.P. (INDAP) programs",
    "comp.sss.tag": "Export arm",
    "comp.sss.title": "Inversiones San Sebastián",
    "comp.sss.desc": "Our export company: through it we ship bulk honey and bee genetic material to international markets — today Germany and the European Union; soon Canada.",
    "comp.sss.l1": "Honey shipments in drums and containers",
    "comp.sss.l2": "Queen bees and bee packages worldwide",
    "comp.sss.l3": "Commercial and international documentation management",
    "products.eyebrow": "Export showcase",
    "products.title": "Two product lines, one standard of excellence",
    "products.bg": "National · International",
    "products.honey.badge": "Present throughout Chile",
    "products.honey.title": "Our honey",
    "products.honey.desc": "100% natural packaged honey from the native forest, present in supermarket chains, gourmet stores and local shops across the country. We also ship directly to any commune in Chile.",
    "products.honey.s1": "Supermarkets, gourmet stores and local shops",
    "products.honey.s2": "Direct shipping all over Chile and sales on Walmart.cl",
    "products.honey.s3": "Monofloral honeys: Ulmo, Tineo, Tiaca, Quillay, Avellano",
    "products.honey.cta": "Where to buy →",
    "products.geno.badge": "Export · EU and Canada",
    "products.geno.title": "Bulk honey and genetic material",
    "products.geno.desc": "Through San Sebastián we export honey in 300 kg drums to Germany and the European Union, and we are opening the route for selected queen bees and bee packages to Canada.",
    "products.geno.s1": "Monofloral honey in 300 kg drums and containers",
    "products.geno.s2": "Mated queen bees and bee packages",
    "products.geno.s3": "Batch traceability and certified bee health",
    "quality.eyebrow": "Quality & traceability",
    "quality.title": "Quality that meets the world's most demanding markets",
    "quality.i1.title": "Plant with sanitary resolution and SAG approval",
    "quality.i1.desc": "Processing facility approved under Chilean Agricultural and Livestock Service (SAG) protocols for European Union export. Meeting the standards for European Union export.",
    "quality.i2.title": "Batch traceability",
    "quality.i2.desc": "Every drum is classified by floral origin, beekeeper and quality parameters, with full records from the hive.",
    "quality.i3.title": "Quality analysis",
    "quality.i3.desc": "Moisture, HMF, floral purity and organoleptic parameters controlled before every shipment.",
    "quality.i4.title": "Institutional backing",
    "quality.i4.desc": "ProChile partnership for market opening and compliance with international protocols.",
    "markets.eyebrow": "International presence",
    "markets.title": "Active and opening export routes",
    "markets.de.title": "Germany · European Union",
    "markets.de.desc": "Bulk honey in full containers. The first direct export from Santa Bárbara, with continuous shipments.",
    "markets.ca.title": "Canada",
    "markets.ca.desc": "Market opening for genetic material: queen bees and bee packages for the Canadian beekeeping industry.",
    "markets.active": "Active",
    "markets.opening": "Coming soon",
    "markets.note": "Chile exports 4,000–5,000 tonnes of honey per year; Europe is the main destination. Chilean bee health — certified management and high-purity zones — positions the country as an emerging supplier of genetic material.",
    "gal.eyebrow": "Our work in pictures",
    "gal.title": "Apiaries, honeys and people",
    "gal.sub": "From hive management in native forests to the packing room: this is how our honey is made, season after season.",
    "gal.cap1": "Apiary in the foothills",
    "gal.cap2": "Tineo, Tiaca and Quillay honeys",
    "gal.cap3": "Hive management",
    "gal.cap4": "Capped honey frames",
    "gal.cap5": "Field days with local beekeepers",
    "gal.cap6": "Ulmo blossom, native forest",
    "gal.cap7": "Frame inspection in full production",
    "gal.cap8": "2025 season",
    "gal.alt1": "Apiary with colorful hives at the foot of the mountain",
    "gal.alt2": "Jars of Tineo, Tiaca and Quillay honey",
    "gal.alt3": "Beekeeper in a yellow suit holding a frame",
    "gal.alt4": "Beekeeper brushing a honey frame",
    "gal.alt5": "Group of beekeepers in white suits in the forest",
    "gal.alt6": "White ulmo blossom in native forest",
    "gal.alt7": "Beekeeper inspecting frames among colorful hives",
    "gal.alt8": "Photo from the 2025 season",
    "dist.eyebrow": "Domestic sales",
    "dist.title": "Find your honey",
    "dist.sub": "Over 50 points of sale from Iquique to Puerto Montt, plus online delivery nationwide.",
    "dist.hint": "Select your region!",
    "dist.stores": "Distributors in this region",
    "dist.empty": "No distributors here yet — want to be the first?",
    "dist.howto": "Directions",
    "dist.walmart.title": "Also on Walmart.cl",
    "dist.walmart.desc": "Find our retail formats on Walmart's online store, with delivery throughout Chile.",
    "dist.become.title": "Want to become a distributor?",
    "dist.become.desc": "If you own a store and want to sell Apícola Santa Bárbara honey, let's talk.",
    "region.tarapaca": "Tarapacá",
    "region.antofagasta": "Antofagasta",
    "region.atacama": "Atacama",
    "region.coquimbo": "Coquimbo",
    "region.valparaiso": "Valparaíso",
    "region.metropolitana": "Santiago Metropolitan",
    "region.ohiggins": "O'Higgins",
    "region.maule": "Maule",
    "region.nuble": "Ñuble",
    "region.biobio": "Biobío",
    "region.araucania": "La Araucanía",
    "region.losrios": "Los Ríos",
    "region.loslagos": "Los Lagos",
    "region.arica": "Arica y Parinacota",
    "region.aysen": "Aysén",
    "region.magallanes": "Magallanes",
    "contact.eyebrow": "Commercial contact",
    "contact.title": "Let's talk about your next import",
    "contact.desc": "If you import bulk honey, are looking for certified-origin monofloral honeys, or need bee genetic material, write to us. We reply in Spanish and English.",
    "contact.addr": "Salamanca 471, Santa Bárbara<br>Hijuela El Quillay, Los Álamos area (plant)",
    "form.name": "Name / Company",
    "form.email": "Email",
    "form.interest": "Interest",
    "form.opt0": "Choose an option",
    "form.opt1": "Bulk honey (export)",
    "form.opt2": "Genetic material — queens / packages",
    "form.opt4": "Buy retail honey (Chile)",
    "form.opt5": "I want to become a distributor",
    "form.opt3": "Other",
    "form.msg": "Message",
    "form.send": "Send message",
    "form.sent": "Opening your email client to send the message…",
    "footer.tag": "Chilean honey and bee genetic material for the world."
  }
};

/* Al recargar, volver siempre al inicio: limpiar hash antes de que el
   navegador haga scroll al anchor, y desactivar la restauración de scroll */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (location.hash) history.replaceState(null, "", location.pathname);

/* ---------- Language toggle ---------- */
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt;
    if (dict[key]) el.alt = dict[key];
  });
  document.documentElement.lang = lang;
  langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  try { localStorage.setItem("asb-lang", lang); } catch (e) {}
  window.dispatchEvent(new CustomEvent("asb:langchange"));
}

langButtons.forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

try {
  const saved = localStorage.getItem("asb-lang");
  const browser = (navigator.language || "es").toLowerCase();
  setLanguage(saved || (browser.startsWith("en") ? "en" : "es"));
} catch (e) { setLanguage("es"); }

/* ---------- Nav scroll effect ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Scroll preciso a secciones ---------- */
const NAV_OFFSET = 54;
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop - NAV_OFFSET, behavior: "smooth" });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").slice(1);
    if (!id || !document.getElementById(id)) return;
    e.preventDefault();
    history.replaceState(null, "", "#" + id);
    scrollToSection(id);
  });
});
/* Cualquier scroll automático dentro del primer segundo se fuerza de
   vuelta al inicio (el navegador puede hacer anchor-scroll tras 'load') */
let forceTop = true;
window.addEventListener("scroll", () => {
  if (forceTop && window.scrollY > 0) window.scrollTo({ top: 0, behavior: "instant" });
}, { passive: true });
window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "instant" });
  setTimeout(() => { forceTop = false; }, 900);
});

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

/* ---------- Reveal on scroll + counters ---------- */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");

    entry.target.querySelectorAll(".counter").forEach(counter => {
      if (counter.dataset.done) return;
      counter.dataset.done = "1";
      animateCounter(counter);
    });
    if (entry.target.classList.contains("counter") && !entry.target.dataset.done) {
      entry.target.dataset.done = "1";
      animateCounter(entry.target);
    }

    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10) || 0;
  const fmt = n => n.toLocaleString("es-CL");
  if (prefersReduced) { el.textContent = fmt(target); return; }
  const duration = 1400;
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Contact form (mailto) ---------- */
const form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const lang = document.documentElement.lang;
  const subject = encodeURIComponent(
    (lang === "en" ? "Export inquiry — " : "Consulta de exportación — ") + data.get("interest")
  );
  const body = encodeURIComponent(
    `${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
  );
  window.location.href = `mailto:contacto@apicolasantabarbaraspa.cl?subject=${subject}&body=${body}`;
  const note = document.getElementById("formNote");
  note.hidden = false;
});

/* ---------- Galería: lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCap = document.getElementById("lightboxCap");
document.querySelectorAll("#galleryGrid .gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCap.textContent = item.querySelector("figcaption").textContent;
    lightbox.hidden = false;
  });
});
function closeLightbox() { lightbox.hidden = true; }
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
