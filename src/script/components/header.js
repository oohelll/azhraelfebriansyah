import profile from '../data/data.js'

const header = () => {
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.innerHTML = 
    `
        <h2>Hello, Welcome!</h2>
        <h1>I'm Azhrael Febriansyah</h1>
        <p>Front End Developer / Coffee Enthusiasm</p>

        <p>I'm Web Developer with expertise on Front End Development for over 8 months.</p>
        <p>My Expertise is to create Website Design</p>
        <div class="head-sosmed">
            <a href="https://www.instagram.com/oohelll/">
                <img src="https://th.bing.com/th/id/R.9225737b22db637356ca3e290736ffc8?rik=ypuS5j2jV%2b5brA&riu=http%3a%2f%2fwww.iconninja.com%2ffiles%2f585%2f462%2f493%2finstagram-square-instagram-new-design-social-media-icon.png&ehk=egytJ2b3Ypk%2bHyFjrU2s8l9GgCKH%2br18AW%2btbY1GQqc%3d&risl=&pid=ImgRaw&r=0"
                    alt="Instagram" class="logo insta-logo">
            </a>
            <a href="https://www.linkedin.com/in/azhrael-febriansyah-338499211">
                <img src="https://www.republiccapitalaccess.com/wp-content/uploads/2014/07/linkedin-icon.png"
                    alt="Linkedln" class="logo link-logo">
            </a>
            <a href="https://github.com/oohelll">
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_github-128.png"
                    alt="Github" class="logo github-logo">
            </a>
            <a href="mailto:azhrael11febriansyah@gmail.com">
                <img src="https://th.bing.com/th/id/R.683de6001c4e4ede8a11ab2da7aadc2c?rik=gKyQC3x5uHGa8A&riu=http%3a%2f%2ffindicons.com%2ffiles%2ficons%2f2804%2fplex%2f128%2fgmail.png&ehk=agc4bEC0X7lXTLZoxbK%2bGA59h24UnZI1Q%2bNRD3%2bF7%2bw%3d&risl=&pid=ImgRaw&r=0"
                    alt="Gmail" class="logo gmail-logo">
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