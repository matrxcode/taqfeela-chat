// Service Worker لتطبيق تقفيلة
const CACHE_NAME = 'taqfeela-v1';

// التثبيت والتفعيل الفوري
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// التعامل مع طلبات الشبكة
self.addEventListener('fetch', (e) => {
  // يمرر طلبات Firebase والشبكة مباشرة
});
