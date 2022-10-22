const removeProfessor = () => {
    const professor = document.getElementsByClassName('ajarn-jong-ja-chuay-khun');
    for (elm of professor) {
        if (elm) elm.remove();
    }
    chrome.storage.sync.get('bond', (data) => {
        setBond(data.bond + 1);
    });

}

const createProfessor = (quote) => {

    let div = document.createElement('div');
    let figure = document.createElement('img');
    let h1 = document.createElement('H1');

    h1.innerText = "พยายามเข้านิสิต\nความฝันอยู่อีกไม่ไกล"
    h1.width = "400px";
    h1.style.color = '#c9c91c';
    h1.style['font-size'] = '30px';
    h1.style['font-style'] = 'italic';
    h1.style['font-family'] = 'sans-serif';
    h1.classList.add("ajarn-jong-ja-chuay-khun");

    figure.src = "https://avatars.githubusercontent.com/u/13951290?v=4";
    figure.style.position = 'fixed';
    figure.style.left = '0px';
    figure.style.bottom = '0px';
    figure.style.zIndex = 68;
    figure.style.padding = '50px';
    figure.style.opacity = 1;
    figure.style.height = "auto";
    figure.style.width = "400px";
    figure.style.filter = "blur(1px)brightness(169%)contrast(169%)";
    figure.setAttribute('rel', 'bottom');
    figure.classList.add("ajarn-jong-ja-chuay-khun");

    div.setAttribute('rel', 'bottom');
    div.style.position = 'fixed';
    div.classList.add("ajarn-jong-ja-chuay-khun");
    div.style.left = '0px';
    div.style.bottom = '0px';
    div.style.zIndex = 69;
    div.style.padding = '50px';
    div.appendChild(h1);

    document.body.appendChild(figure);
    document.body.appendChild(div);

    const timeOut = setTimeout(removeProfessor, 3569);
}