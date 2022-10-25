document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#newprof").addEventListener("click", () => {
        console.log("clicked newProf");
        window.open(chrome.runtime.getURL("html/newProf.html"));
    });

    const toggleButton = document.querySelector('#toggle');
    chrome.storage.sync.get("isNotBusy", function (result) {
        let isNotBusy = result.isNotBusy;
        if(isNotBusy) toggleButton.innerHTML = "Turn OFF";
        else toggleButton.innerHTML = "Turn ON";
    });

    toggleButton.addEventListener("click", () => {
        console.log("clicked toggle");
        chrome.storage.sync.get("isNotBusy", function (result) {
            let isNotBusy = result.isNotBusy;
            chrome.storage.sync.set({ isNotBusy: !isNotBusy }, () => {
                if(!isNotBusy) toggleButton.innerHTML = "Turn OFF";
                else toggleButton.innerHTML = "Turn ON";
            });
        });
    });
});
