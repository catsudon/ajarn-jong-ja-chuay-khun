import { professors } from '../data/professorList.js'

const professor_container = document.getElementById('professor_container')

const createProfessors = async () => {
    for (let professor of professors) {
        const professorElmt = document.createElement('div')
        professorElmt.classList.add('Ajarn')
        const professorInnerHTML = `
        <div class="ajarn">
            <div class="pic-cont">
                <img src="../${professor.imgPath}" alt="${professor.name}" class="aj-pic">
            </div>
            <div class="aj-info">
                <div class="aj-name">${professor.name}</div>
            </div>
        </div>`
        professorElmt.innerHTML = professorInnerHTML
        professor_container.appendChild(professorElmt)
    }
}

createProfessors();

const ajarns = Array.from(document.getElementsByClassName("ajarn"));
ajarns.forEach((ajarn) => {
ajarn.addEventListener("click", () => {
    alert(ajarn.querySelector(".aj-name").innerHTML);
});
});