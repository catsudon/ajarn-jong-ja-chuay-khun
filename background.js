console.log("ajarn is ready to help you.");

const buttonClicked = (tab) => {
    console.log(tab);
    chrome.storage.sync.get('bond', (data) => {
        let msg = {
            bond: data.bond
        };
        chrome.tabs.sendMessage(tab.id, msg);
    });
}

chrome.browserAction.onClicked.addListener(buttonClicked);

