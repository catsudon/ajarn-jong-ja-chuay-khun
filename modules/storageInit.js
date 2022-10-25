chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason == "install") {
        resetBond();
        chrome.storage.sync.set({ professorId: -1 });
        chrome.storage.sync.set({ lastPopUp: 0 });
        chrome.storage.sync.set({ isNotBusy: true });
        window.open(chrome.runtime.getURL("/html/newProf.html"));
    }
    else {
        console.log("not install, aborting init.")
    }
});