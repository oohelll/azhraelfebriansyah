const header = () => {
    const jumbotron = document.querySelector('.jumbotron');
    const div = document.createElement('div');
    div.classList.add('head-sosmed');


    jumbotron.innerHTML = 
    `
        <h2>Hello, Welcome!</h2>
        <h1>I'm Azhrael Febriansyah</h1>
        <p>Front End Developer / Coffee Enthusiasm</p>

        <p>I'm Web Developer with expertise on Front End Development for over 8 months.</p>
        <p>My Expertise is to create Website Design</p>
    `
    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const dataMedia = response.Social_Media
            dataMedia.forEach((media) => {
                div.innerHTML += `
                    <a href=${media.Link}>
                        <img src=${media.Img}
                            alt=${media.platform} class="logo ${media.platform}">
                    </a>
                `
            })
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

    const windowWidth = window.innerWidth;
    const nav = document.querySelector('nav')
    const burger = document.querySelector('.burger')
    const navMenu = document.querySelector('.nav-list')
    if(windowWidth === 576){
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 100) {
                nav.classList.add('dark-navbar');
            } else {
                nav.classList.remove('dark-navbar');
            }
        })
        setTimeout(() => {
            burger.addEventListener('click', () => {
                navMenu.classList.toggle('dark-navbar')
                // navList.style.backgroundColor = `rgba(0, 0, 0, 0.719)`;
            })
        }, 500)
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