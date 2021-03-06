function headerComponent(el) {
    const componentEl = document.createElement('div');
    componentEl.innerHTML = `
    <section class="home__container">
    <header class="header__container">
        <a class="header__logo" href="https://gustavo97-oss.github.io/DESAFIO-MODULO-4/index.html"><h1 class="header__logo">Gustavo</h1></a>
        <nav class="header__menu">
            <div class="header__menu-line"></div>
            </nav>
            <div class="header__content-links">
            <a class="header__links" href="./portfolio.html">Porfolio</a>
            <a class="header__links" href="./servicios.html">Servicios</a>
            <a class="header__links" href="./contacto.html">Contacto</a>
        </div>
    </header>
</section>`;
const header = componentEl.querySelector('.header__container');
el.appendChild(header);
}
function headerMenu() {
    const botonMenu = document.querySelector('.header__menu');
    const ventana = document.querySelector('.header__content-links');
    let menuOpen = false;
    let ventanaOpen = false;

    botonMenu.addEventListener('click', ()=> {
        if(!menuOpen) {
            botonMenu.classList.add('open');
            menuOpen = true;
        } else {
            botonMenu.classList.remove('open');
            menuOpen = false;
        }
    });
    botonMenu.addEventListener('click', ()=> {
        if(!ventanaOpen) {
            ventana.classList.add('open');
            ventanaOpen = true;
        } else {
            ventana.classList.remove('open');
            ventanaOpen = false;
        }
    })
}
