console.log("it works")

const gotMsg = (message, sender, sendResponse) => {
    console.log("bond is " + message.bond);
    if (message.bond == 10) {
        let paragraphs = document.getElementsByTagName('p')
        for (elt of paragraphs) {
            elt.style['background-color'] = "#FF00FF"
        }
    }
};

chrome.runtime.onMessage.addListener(gotMsg);

chrome.storage.sync.get("isNotBusy", function (professor) {
    let isNotBusy = professor.isNotBusy;
    if(isNotBusy) createProfessor();
    return bond;
});