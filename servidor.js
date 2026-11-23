/* Servidor local de vista previa — solo sirve los archivos de esta carpeta */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon"
};

http.createServer((req, res) => {
  let file = decodeURIComponent(req.url.split("?")[0].split("#")[0]);
  if (file === "/") file = "/index.html";
  const ruta = path.join(__dirname, file);
  if (!ruta.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  fs.readFile(ruta, (err, data) => {
    if (err) { res.writeHead(404); return res.end("No encontrado"); }
    res.writeHead(200, { "Content-Type": TIPOS[path.extname(ruta)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Página disponible en http://localhost:${PORT}`));
