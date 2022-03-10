import {profiles, progressBar} from '../data/data.js';

const about = () => {
    const aboutId = document.getElementById("About");
    const div = document.createElement('div');
    div.classList.add('about');

    div.innerHTML = `
        <h1>About</h1> 
        <p>I am a Junior Web Developer from bogor who likes a person who always wants to seek new experiences
        and always tries to be a positive person who can work both individually and together and has a high
        willingness to learn</p>
        <p>Profile: </p>
        ${profiles.map((profile) => {
            return `<ul><li>${profile}</li></ul>`
        }).join("")}
    `

    const divBar = document.createElement('div');
    divBar.classList.add('progress-bar');

    progressBar.forEach((prog) => {
        divBar.innerHTML += `
            <p>${prog.titlePar}</p>
            <div class="container-bar">
                <div class="skill ${prog.skill}">${prog.bar}</div>
            </div>
        `
    })

    aboutId.append(div, divBar);

}

export default about;