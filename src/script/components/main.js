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
                    return `<a href=${data.portfolioLink}><img src=${data.portfolioImg}></a>`
                }).join("")}
            `
        })
    aboutPortfolio.append(divPort);
}

const mySkill = () => {
    const container = document.getElementById('Myskill');
    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const sertifikat = response.Sertifikat;
            const [dicoding, dicoding2, dicoding3, progate, progate2, dts] = sertifikat
            const skills = ['HTML', 'CSS', 'Javascript', 'Jquery'];

            container.innerHTML = `
            <h1>Skill & Certification</h1>
            <div class="skill-container">
                <img src=${dicoding} class="main-img">
                <div class="right-skill">
                    ${skills.map((skill) => {
                        return `
                            <p>${skill}</p>
                            <div class="container-bar">
                                <div class="skill ${skill}"></div>
                            </div>
                        `
                    }).join("")}
                </div>
            </div>
            <div class="certif-list">
                ${sertifikat.map((sertif) => {
                    return `<img src=${sertif} class="img"></img>`
                }).join("")}
            </div>
        `

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
    })
}

const other_skill = () => {
    const otherSkill = document.getElementById('other-skill');
    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const latte_Skill = response.Other_Skill.slice(0,2);
            const latte_Skill2 = response.Other_Skill.slice(2);

            otherSkill.innerHTML = `
            <div class="list-coffee">
                <div class="list-container-1">
                    ${latte_Skill.map((skill) => {
                        return `<img src=${skill} class="img-coffee"></img>`
                    }).join("")}
                </div>
                <div class="list-container-2">
                    ${latte_Skill2.map((skill) => {
                        return `<img src=${skill} class="img-coffee"></img>`
                    }).join("")}
                </div>
            </div>

            <div class="list-coffee-text">
                <h1>What Other Skill That I Have?</h1>
                <p>Other than just making a website and learn how to code, I also love to making Latte Art with various
                    pattern on the top of it. I learn Latte Art for about 5 months using simple equipment and
                    ingridients, such as Rok Presso,
                    French Press, Fresh Milk, And Espresso</p>
            </div>
            `
        })

}
export {about, aboutPortfolio, mySkill, other_skill};