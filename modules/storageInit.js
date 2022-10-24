chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason == "install") {
        setBond(0);
        chrome.storage.sync.set({ lastPopUp: 0 });
        chrome.storage.sync.set({ isNotBusy: true });
    }
    else {
        console.log("not install, aborting init.")
    }
});