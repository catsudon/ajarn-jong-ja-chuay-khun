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

const getQuote2 = () => {
    n = Math.floor(Math.random() * quote2.length);
    return quote2[n]
}

const createProfessor = (quote) => {

    let container = document.createElement('div');
    let figure = document.createElement('img');
    let h1 = document.createElement('H1');

    h1.innerText = getQuote2();
    h1.style['position'] = 'absolute';
    h1.style['width'] = '90%';
    h1.style['top'] = '76.9%';
    h1.style['left'] = '50%';
    h1.style['transform'] = 'translate(-50%, -50%)';
    h1.style['color'] = '#c9c91c';
    h1.style['font-size'] = '25px';
    h1.style['font-style'] = 'italic';
    h1.style['font-family'] = 'sans-serif';
    h1.style['-webkit-text-stroke'] = '1px black';
    h1.classList.add("ajarn-jong-ja-chuay-khun");

    figure.src = professors[Math.floor(Math.random() * professors.length)]['imgUrl'];
    figure.style['height'] = '269px';
    figure.classList.add("ajarn-jong-ja-chuay-khun");

    container.style['position'] = 'fixed';
    container.style['top'] = '6%';
    container.style['right'] = '9%';
    container.style['text-align'] = 'center';
    container.style['color'] = 'white';
    container.style['z-index'] = 6969;
    container.appendChild(figure);
    container.appendChild(h1);

    document.body.appendChild(container);

    const timeOut = setTimeout(removeProfessor, 4569);
}
