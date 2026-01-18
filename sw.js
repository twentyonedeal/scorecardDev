// This file is required for Android to allow installation
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Leaving this empty is enough to satisfy Chrome's requirements
});