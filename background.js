console.log("ajarn is ready to help you.");
// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);
// });

const buttonClicked = (tab) => {
    console.log(tab);
    chrome.storage.sync.get('bond', (data) => {
        let msg = {
            bond: data.bond
        };
        chrome.tabs.sendMessage(tab.id, msg);
    });
    chrome.storage.sync.set({ isNotBusy: true });
}

chrome.browserAction.onClicked.addListener(buttonClicked);

