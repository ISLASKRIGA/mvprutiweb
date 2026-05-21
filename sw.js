// =====================================================================
// RUTI Service Worker — Background Keep-Alive
// Mantiene la conexión activa en segundo plano cuando el navegador
// intenta suspender la pestaña del conductor.
// =====================================================================

const SW_VERSION = 'ruti-sw-v1';

self.addEventListener('install', (event) => {
    console.log('[SW] Instalado correctamente.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activado.');
    event.waitUntil(clients.claim());
});

// Maneja mensajes del hilo principal
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'PING') {
        // Responder con PONG para confirmar que el SW sigue activo
        event.source.postMessage({ type: 'PONG', timestamp: Date.now() });
    }
    
    if (event.data && event.data.type === 'START_KEEPALIVE') {
        // El hilo principal nos pide que empecemos a hacer keep-alive
        console.log('[SW] Keep-alive iniciado para sesión de conductor.');
    }
    
    if (event.data && event.data.type === 'STOP_KEEPALIVE') {
        console.log('[SW] Keep-alive detenido.');
    }
});

// Responder a fetch (necesario para que el SW sea válido como PWA)
self.addEventListener('fetch', (event) => {
    // Passthrough — no interceptamos requests, solo estamos activos
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })));
});
