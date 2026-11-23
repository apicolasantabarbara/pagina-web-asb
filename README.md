# Apícola Santa Bárbara — Sitio web de exportación

Vitrina digital bilingüe (ES/EN) para la exportación de miel a la Unión Europea
y material genético apícola (reinas y paquetes de abejas) a Canadá.

## Ver el sitio

Abrir `index.html` directamente en el navegador, o servir la carpeta con:

```
npx serve .
```

## Estructura

```
index.html      → contenido de la página (una sola página con secciones)
css/styles.css  → diseño y colores
js/main.js      → cambio de idioma ES/EN, animaciones, formulario
```

## Pendiente de personalizar (datos reales)

- **Distribuidores**: editar `js/distribuidores.js` — ahí se agregan/quitan
  puntos de venta por región (nombre, ciudad, dirección, mapa, WhatsApp,
  Instagram). Los marcados "(ejemplo)" deben reemplazarse por los ~50
  distribuidores reales.
- **Instagram**: el ícono flotante apunta a `instagram.com/apicolasantabarbara`
  — confirmar el usuario real y corregir en `index.html` (buscar `dock-ig`).
- **Correo**: `contacto@apicolasantabarbaraspa.cl` — pendiente de crear
  (ver instrucciones de configuración con Gmail).
- **Logo**: hoy se usa un ícono hexagonal; se puede reemplazar por el logo real.
- **Fotos**: el diseño actual no usa fotos (todo CSS/SVG). Se pueden agregar
  fotos reales de la planta, tambores, apiarios y reinas cuando estén disponibles.

## Para publicar en www.apicolasantabarbaraspa.cl

Estos 3 archivos/carpetas se suben tal cual a cualquier hosting
(cPanel, Netlify, Vercel, GitHub Pages, etc.) — no requiere base de datos
ni tecnología especial, es un sitio estático.
