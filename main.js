const gotMsg = (message, sender, sendResponse) => {
   // console.log("bond is " + message.bond);
};

chrome.runtime.onMessage.addListener(gotMsg);


const checkProfessorAvailability = (professorId) => {
    chrome.storage.sync.get("isNotBusy", function (professor) {
        let isNotBusy = professor.isNotBusy;
        if (isNotBusy) awakeProfessor(professorId);
    });
}


chrome.storage.sync.get("professorId", function (professor) {
    let professorId = professor.professorId;
    if (professorId == -1) {
        const url = chrome.runtime.getURL("/html/newProf.html");
        if (window.confirm('Please select your Professor, If you click "ok" you\'ll be redirected . ')) {
            window.open(url);
        };
    }
    else checkProfessorAvailability(professorId);
});



