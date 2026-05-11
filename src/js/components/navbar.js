const initNavBar = () => {
    // Accedemos a nuestro contenedor de los enlaces
    const navbarContainer = document.querySelector('.navbar__list');
    // Accedemos a nuestro titulo del header
    const headerTitle = document.getElementById('titleSection');

    // Validamos que existan nuestros elementos
    if (!navbarContainer || !headerTitle) return;

    // Esperamos a que le den clic
    navbarContainer.addEventListener('click', (e) => {

        // Accedemos a los elementos
        const links = e.target.closest('.navbar__link');

        // Veficamos que se de clic sobre el enlace
        if (!links) return;

        e.preventDefault();

        // Quitamos la clase activa y la ponemos en el elemento cliqueado
        const currentActive = navbarContainer.querySelector('[aria-current="page"]');

        if (currentActive) {
            currentActive.removeAttribute('aria-current');
        }

        // Colocamos el elemento activo
        links.setAttribute('aria-current', 'page');

        // Extraemos el valor del link
        const section = links.dataset.section;

        // Colocamos el nombre de la seccion
        headerTitle.textContent = section;
    });
};

const toggleSidebar = () => {
    // Accedemos a nuestro contenedor 
    const logoContainer = document.querySelector('.aside');

    // Esperamos a que den clic sobre algun boton
    logoContainer.addEventListener('click', (e) => {
        // Extraemos el boton que se le dio clic
        const button = e.target.closest('.icon__btn');

        // Verificamos que se de clic sobre los botones
        if (!button) return;

        // Mostramos/Ocultamos el sidebar
        logoContainer.classList.toggle('aside--expanded');
    });
};

export { initNavBar, toggleSidebar };