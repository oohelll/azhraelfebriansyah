const about = (about) => {
    const aboutId = document.getElementById("About");
    const div = document.createElement('div');
    const divBar = document.createElement('div');
    divBar.classList.add('about-Img');
    div.classList.add('about');
    
    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const dataProfile = response.profile;
            const listProfile = response.list
            div.innerHTML = `
                <h1>About</h1> 
                <p>I am a ${about} from ${dataProfile.Kota[1]} who likes a person who always wants to seek new experiences
                and always tries to be a positive person who can work both individually and together and has a high
                willingness to learn</p>
                <p>Profile: </p>
                ${listProfile.map((profile) => {
                    return `<ul><li>${profile}</li></ul>`
                }).join("")}
            `
            divBar.innerHTML += `
                <img src="./src/img/Web-1.svg">
            `
        })

    // progressBar.forEach((prog) => {
    //     divBar.innerHTML += `
    //         <p>${prog.titlePar}</p>
    //         <div class="container-bar">
    //             <div class="skill ${prog.skill}">${prog.bar}</div>
    //         </div>
    //     `
    // })
    aboutId.append(div, divBar);
}

const aboutPortfolio = () => {
    const aboutPortfolio = document.getElementById('MyPortfolio');
    const divPort = document.createElement('div')
    divPort.classList.add('portfolioImg')

    aboutPortfolio.innerHTML = `
        <h1>My Portofolio</h1>
        <p>Some of my previous project in Front End Web Development</p>    
    `
    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const dataPortfolio = response.Portfolio;
            divPort.innerHTML = `
                ${dataPortfolio.map((data) => {
                    return `<a href=${data.PortfolioLink}><img src=${data.portfolioImg}></a>`
                }).join("")}
            `
        })
    aboutPortfolio.append(divPort);
}

const mySkill = () => {
    const container = document.getElementById('Myskill');
    const mainImg = document.querySelector('.main-img');
    const imgs = document.querySelectorAll('.certif-list img');

    container.addEventListener('click', (e) => {
        if(e.target.className == 'img'){
            mainImg.src = e.target.src;
            mainImg.classList.add('fade')
            setTimeout(() => {
                mainImg.classList.remove('fade')
            },500)

            imgs.forEach((img) => {
                if(img.classList.contains('active')){
                    img.classList.remove('active');
                }
        
                e.target.classList.add('active')
            })
        }
    })
}


export {about, aboutPortfolio, mySkill};