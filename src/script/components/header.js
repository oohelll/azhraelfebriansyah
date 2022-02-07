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

export {navSlide};