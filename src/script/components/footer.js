const footer = () => {
    const footer = document.querySelector('footer .contact');
    fetch('./src/script/data/data.json')
        .then(response => response.json())
        .then(response => {
            const dataSocial= response.Social_Media;
            footer.innerHTML = `
            <div class="contact-list">
                <h5>Hubungi Saya</h5>
                <div class="contact-list-list">
                    <p><span>&#9906</span>Jalan Raya Wangun, Bogor</p>
                    <p><span>&#9990;</span>62-822-5805-6097</p>
                    <p><span>&#9993;</span><a
                            href="emailto: azhrael11febriansyah@gmail.com">azhrael11febriansyah@gmail.com</a></p>
                </div>
            </div>
    
            <div class="social-media">
                <h5>Social Media</h5>
                <p>Anda dapat menghubungi saya melalui diplatform lainnya</p>
                <div class="media-list">
                    ${dataSocial.map((data) => {
                        return  `
                            <a href=${data.Link}>
                                <img src=${data.Img}
                                alt=${data.platform} class="image-media ${data.platform}" id=${data.platform} />
                            </a>
                        `
                    }).join("")}
                </div>
            </div>
        `  
        })
}

export default footer;