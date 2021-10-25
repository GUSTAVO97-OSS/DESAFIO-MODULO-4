function footerComponent(el) {
    const componentEl = document.createElement('div');
    componentEl.innerHTML = `
    <section class="footer">
            <footer class="footer__container">
                <h2 class="footer__logo">Gustavo</h2>
    
                <div class="footer__container-networks">
                <div class="footer__container-networks-title-img">
                <h3 class="footer__title-networks">Instagram</h3>
                <img src="./images/instagram (1).png" alt="instagram" class="footer__networks-img">
                </div>
                    
                <div class="footer__container-networks-title-img">
                <h3 class="footer__title-networks">Linkedin</h3>
                <img src="./images/Vector (4).png" alt="linkedin" class="footer__networks-img">
                </div>

                <div class="footer__container-networks-title-img">
                <h3 class="footer__title-networks">Github</h3>
                <img src="./images/Vector (5).png" alt="github" class="footer__networks-img">
                </div>
                </div>
            </footer>
        </section>
    `
    const footer = componentEl.querySelector('.footer__container');
    el.appendChild(footer);
    }
