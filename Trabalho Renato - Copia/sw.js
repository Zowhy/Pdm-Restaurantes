let cacheName = "Bella Pasta";
let filesToCache = [
  "/", "/index.html", "/cardapioM", "/cardapioD", "/cardapioC",
   "/js/main.js", "/css/style.css", "/css/cardapio.css", "/images/alfredo.jpg", "/images/bife.jpg", 
   "/images/bolonhesa.jpg", "/images/brigadeiro.jpg", "/images/costela.jpg", "/images/estrogonofe.jpg", 
   "/images/mousse.jpg", "/images/pesto.jpg", "/images/pudim.jpg", "/manifest.json", "/sw.js", "images/pwa-iicon-512.png", "images/pwa-icon-256.png"
];

/* Instalação do Service Worker e cache dos arquivos */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

/* Interceptação de requisições e resposta com cache ou rede */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
