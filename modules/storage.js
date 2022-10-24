const setBond = (bonding) => {
    chrome.storage.sync.set({ bond: bonding }, function () {
        console.log('Value setted to ' + bonding);
        return "bond setted to " + bonding;
    });
}

const getBond = () => {
    chrome.storage.sync.get("bond", function (result) {
        let bond = result.bond;
        console.log("returning " + result.bond);
        return bond;
    });
}



// to toggle on/off
// chrome.storage.sync.get("isNotBusy", function (result) {
//     let isNotBusy = result.isNotBusy;
//     chrome.storage.sync.set({ isNotBusy: !isNotBusy });
// });