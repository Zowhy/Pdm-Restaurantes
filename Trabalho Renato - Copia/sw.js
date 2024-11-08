
let cacheName = "Bella Pasta";
let filesToCache = [
  "/", "/index", "/cardapioM", "/cardapioD", "/cardapioC", "/js/main.js", "/css/style.css", "/css/cardapio.css", "/alfredo.jpg", "/bife.jpg", "/bolonhesa.jpg", "/brigadeiro.jpg", "/costela.jpg", "/estrogonofe.jpg", "/mousse.jpg", "/pesto.jpg", "/pudim.jpg",
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
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
