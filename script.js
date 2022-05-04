const text = document.getElementById('text')

function openTextHome(){
    text.innerHTML = `
        <div class='text-home'>
            <h1>Hello, my name is <strong>Guilherme</strong></h1>
            
            <h2>I'm a <strong>Front-End Developer</strong></h2>

            <p>I'm a front-end developer with extensive experience for over 4 months. My expertise is to create high perfomance project graphical interface and much more.</p>
        </div>
    `
}

function openTextAbout(){
    text.innerHTML = `
        <div class='text-about'>
            <h1>About me</h1>

            <div class="line-1"></div>
            <div class="line-2"></div>

            <h2>I'm Guilherme and <strong>Front-End Developer</strong></h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto qui temporibus? Reiciendis, corrupti amet. Aperiam sequi quidem provident voluptatum.</p>

            <p class="about-info">
                <strong>Degree:</strong> PL
            </p>
            <p class="about-info">
                <strong>Age:</strong> 20
            </p>
            <p class="about-info"><strong>
                Email:</strong> info@gmail.com
            </p>
            <p class="about-info"><strong>
                Freelance:</strong> Available
            </p>
        </div>
    `
}







function openTextServices(){
    text.innerHTML = `
        <div class="text-services">
            <h1>Services</h1>

            <div class="line-1"></div>
            <div class="line-2"></div>

            <div class="services-card-container">
                <div class="services-card">
                    <img src="imagens/notebook-icon.png">

                    <h2>Web Development</h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, excepturi?</p>
                </div>

                <div class="services-card">
                    <img src="imagens/smartphone-icon.png">

                    <h2>Mobile Development</h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, excepturi?</p>
                </div>
            </div>
    </div>
    `
}


function openTextContact(){
    text.innerHTML = `
        <div class="text-contact"> 
            <h1>Contact me</h1>

            <div class="line-1"></div>
            <div class="line-2"></div>

            <h2>Have You Any Questions ?</h2>

            <h3>You can send me a message on
                <a href="https://www.linkedin.com/in/guilherme-silveira-567b99211/" target="_blank">LinkedIn</a>
             </h3>
        </div>
    `
}