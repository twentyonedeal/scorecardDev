# scorecardDev
# 🎲 JAY Scorecard
A lightweight, mobile-first Web App (PWA) for tracking board game scores.

## 🚀 Features
- **Works Offline:** Once installed, you can use it without internet.
- **PWA Ready:** Add it to your Home Screen for a native app experience.
- **Fast & Simple:** No bulky menus, just scoring.

## 📲 How to Install
### iOS (iPhone/iPad)
1. Open the site in **Safari**.
2. Tap the **Share** button (box with upward arrow).
3. Scroll down and tap **Add to Home Screen**.

### Android
1. Open the site in **Chrome**.
2. Tap the **three dots** in the corner.
3. Tap **Install App** or **Add to Home Screen**.

## 🛠️ Tech Stack
- HTML5, CSS3, JavaScript
- Manifest.json for PWA support
- Service Workers for offline caching


Update your sw.js ASSETS list
You should include every icon version you are using in your index.html and manifest.json.
JavaScript

const ASSETS = [
-  './',
  './index.html',
  './manifest.json',
  './styles.css',
  './app.js',
  './icon-192.png',        // Android/Chrome small
  './icon-512.png',        // Android/Chrome large
  './apple-touch-icon.png' // iOS specific
];

Why this matters for each device:

    iPhone (apple-touch-icon.png): iOS uses this specifically for the Home Screen. If you ever add a "Splash Screen" or an "Install" button within your app, having this cached ensures the icon shows up instantly.

    Android (icon-192.png and 512): Chrome uses these for the "Add to Home Screen" prompt and the "Splash Screen" that appears when the app is launching.

    The manifest itself: Since your manifest points to these icons, the manifest and the icons need to be cached together to work as a complete package.

Whenever you change your icons (like replacing that placeholder with a new one), you should change the CACHE_NAME at the top of your sw.js file:
JavaScript
// Change 'v1' to 'v2' whenever you update your images or CSS!
const CACHE_NAME = 'jay-scorepad-v2'; 

This tells the phone: "Hey, there's a new version available, throw away the old files and download the new icons."


