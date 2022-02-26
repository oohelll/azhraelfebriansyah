import {profiles, medias} from '../data/data.js'

const header = () => {
    const [firstName, lastName, , ,] = profiles;
    const jumbotron = document.querySelector('.jumbotron');
    const div = document.createElement('div');
    div.classList.add('head-sosmed');

    jumbotron.innerHTML = 
    `
        <h2>Hello, Welcome!</h2>
        <h1>I'm ${firstName} ${lastName}</h1>
        <p>Front End Developer / Coffee Enthusiasm</p>

        <p>I'm Web Developer with expertise on Front End Development for over 8 months.</p>
        <p>My Expertise is to create Website Design</p>
    `
    medias.forEach((media) => {
        div.innerHTML += `
            <a href=${media.Link}>
                <img src=${media.Img}
                    alt=${media.platform} class="logo ${media.platform}">
            </a>
        `
    })

    jumbotron.append(div)
}

const nav = () => {
    let navList = document.querySelector('.nav-list');
    let navLinks = ["Home", "About", "Skill", "Portfolio"]

    for(let i = 0; i < navLinks.length; i++){
        navList.innerHTML += `
            <li>
                <a href="#${navLinks[i]}">${navLinks[i]}</a>
            </li>
        `
    }
}


const navSlide = () => {
    const links = document.querySelectorAll('.nav-list li');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    })
}

export {header, nav, navSlide};