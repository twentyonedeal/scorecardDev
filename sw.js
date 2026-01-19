
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js') // Points to your new file
    .then((registration) => {
        const statusEl = document.getElementById('syncStatus');
        
        // If it's already active
        if (registration.active) {
            statusEl.innerText = "✅ Offline Ready";
        }

        // Listen for the moment it becomes active
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'activated') {
                    statusEl.innerText = "✅ Offline Ready";
                }
            };
        };
    })
    .catch((err) => {
        document.getElementById('syncStatus').innerText = "⚠️ Offline Unavailable";
        console.error("SW Registration failed:", err);
    });
}
