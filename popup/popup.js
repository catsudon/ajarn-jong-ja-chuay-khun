document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#newprof").addEventListener("click", () => {
        console.log("clicked newProf")
        window.open(chrome.runtime.getURL("html/newProf.html"));
    });
});