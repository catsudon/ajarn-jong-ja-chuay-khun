document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#newprof").addEventListener("click", () => {
        //console.log("clicked newProf");
        window.open(chrome.runtime.getURL("html/newProf.html"));
    });

    const ajImg = this.documentElement.querySelector('.aj-pic');
    const bondingBar = document.querySelector('#bond');
    const bondingNum = document.querySelector('#progress');
    const p = document.querySelector('.progress-label');
    chrome.storage.sync.get("professorId", (result) => {
        let professorId = result.professorId;
        ajImg.src = `/img/professors/${professorId}.jpg`;
        chrome.storage.sync.get(professorId, (result) => {
            let bond = result[professorId];
            bondingBar.value = bond;
            bondingBar.content = bond+'/100';
            bondingNum.innerHTML = bond+'%';

            if(bond >= 20) p.innerHTML+='❤️';
            if(bond >= 40) p.innerHTML+='❤️';
        });
    })




    const toggleButton = document.querySelector('#toggle');
    chrome.storage.sync.get("isNotBusy", (result) => {
        let isNotBusy = result.isNotBusy;
        if(isNotBusy) {
            toggleButton.innerHTML = "ON";
            document.body.classList.add("sleep-mode");
        }
        else {
            toggleButton.innerHTML = "OFF";
            document.body.classList.remove("sleep-mode");
        }
    });

    toggleButton.addEventListener("click", () => {
        //console.log("clicked toggle");
        chrome.storage.sync.get("isNotBusy", (result) => {
            let isNotBusy = result.isNotBusy;
            chrome.storage.sync.set({ isNotBusy: !isNotBusy }, () => {
                if(!isNotBusy) {
                    toggleButton.innerHTML = "ON";
                    document.body.classList.add("sleep-mode");
                }
                else {
                    toggleButton.innerHTML = "OFF";
                    document.body.classList.remove("sleep-mode");
                }
            });
        });
    });
});
