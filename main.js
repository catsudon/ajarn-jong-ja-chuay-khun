const gotMsg = (message, sender, sendResponse) => {
    console.log("bond is " + message.bond);
};

chrome.runtime.onMessage.addListener(gotMsg);

chrome.storage.sync.get("isNotBusy", function (professor) {
    let isNotBusy = professor.isNotBusy;
    if(isNotBusy) awakeProfessor();
});