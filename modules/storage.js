const setBond = (professorId, bonding) => {
    let obj = {};
    obj[professorId] = bonding;
    chrome.storage.sync.set(obj, function () {
        //console.log('Value setted to ' + bonding);
        return "bond setted to " + bonding;
    });
}

const resetBond = () => {
    let obj = {};
    for(let i=0; i<=100; ++i) obj[i] = 0;
    chrome.storage.sync.set(obj);
}





// to toggle on/off
// chrome.storage.sync.get("isNotBusy", function (result) {
//     let isNotBusy = result.isNotBusy;
//     chrome.storage.sync.set({ isNotBusy: !isNotBusy });
// });