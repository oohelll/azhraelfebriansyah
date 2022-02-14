import {name, medias} from '../data/data.js'

const header = () => {
    const {firstName, lastName} = name[0];
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.innerHTML = 
    `
        <h2>Hello, Welcome!</h2>
        <h1>I'm ${firstName} ${lastName}</h1>
        <p>Front End Developer / Coffee Enthusiasm</p>

        <p>I'm Web Developer with expertise on Front End Development for over 8 months.</p>
        <p>My Expertise is to create Website Design</p>
        <div class="head-sosmed">
            <a href=${medias[0].Link}>
                <img src=${medias[0].Img}
                    alt=${medias[0].platform} class="logo ${medias[0].platform}">
            </a>
            <a href=${medias[1].Link}>
                <img src=${medias[1].Img}
                    alt=${medias[1].platform} class="logo ${medias[1].platform}">
            </a>
            <a href=${medias[2].Link}>
                <img src=${medias[2].Img}
                    alt=${medias[2].platform} class="logo ${medias[2].platform}">
            </a>
            <a href=${medias[3].Link}>
                <img src=${medias[3].Img}
                    alt=${medias[3].platform} class="logo ${medias[3].platform}">
            </a>
        </div>
    `
}

const nav = () => {
    let navList = document.querySelector('.nav-list');
    let navLinks = ["Home", "About", "Skill", "Portfolio"]

    for(let i = 0; i < navLinks.length; i++){
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute("href", `${navLinks[i]}`)
        let text = document.createTextNode(navLinks[i])
        a.appendChild(text)
        li.append(a)
        navList.appendChild(li)
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