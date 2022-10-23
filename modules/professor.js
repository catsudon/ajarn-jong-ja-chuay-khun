const removeProfessor = () => {
    const professor = document.getElementsByClassName('ajarn-jong-ja-chuay-khun');
    for (elm of professor) {
        if (elm) elm.remove();
    }
    chrome.storage.sync.get('bond', (data) => {
        setBond(data.bond + 1);
    });

}

const getQuote1 = () => {
    n = Math.floor(Math.random() * quote1.length);
    return quote1[n]
}

const createProfessor = (quote) => {

    let bigDiv = document.createElement('div');
    let div = document.createElement('div');
    let figure = document.createElement('img');
    let h1 = document.createElement('H1');

    h1.innerText = getQuote1();
    h1.width = "400px";
    h1.style.color = '#c9c91c';
    h1.style['font-size'] = '30px';
    h1.style['font-style'] = 'italic';
    h1.style['font-family'] = 'sans-serif';
    h1.style['-webkit-text-stroke'] = '1px white';
    h1.classList.add("ajarn-jong-ja-chuay-khun");

    figure.src = "https://avatars.githubusercontent.com/u/13951290?v=4";
    figure.style.position = 'fixed';
    figure.style.top = '0px';
    figure.style.right = '0px';
    figure.style.zIndex = 6968;
    figure.style.padding = '50px';
    figure.style.opacity = 1;
    figure.style.height = "400px";
    figure.style.width = "auto";
    figure.style.filter = "blur(1px)brightness(169%)contrast(169%)";
    figure.setAttribute('rel', 'bottom');
    figure.classList.add("ajarn-jong-ja-chuay-khun");

    div.setAttribute('rel', 'bottom');
    div.style.position = 'fixed';
    div.classList.add("ajarn-jong-ja-chuay-khun");
    div.style.top = '300px';
    div.style.right = '50px';
    div.style.zIndex = 6969;
    div.style.padding = '50px';
    div.style.float = 'top';
    div.appendChild(figure);
    div.appendChild(h1);

    bigDiv.appendChild(figure);
    bigDiv.appendChild(div);
    bigDiv.style.top = '0px';
    bigDiv.style.right = '0px';
    document.body.appendChild(bigDiv);

    const timeOut = setTimeout(removeProfessor, 3569);
}
