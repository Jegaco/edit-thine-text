const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.eventForLater = event;
    butInstall.classList.remove("hidden");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const storedEvent = window.eventForLater;
    if (!storedEvent) {
        return;
    }
    storedEvent.prompt();
    window.eventForLater = null;
    butInstall.classList.add("hidden");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt.null;
});
