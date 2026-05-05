const initNavBar = () => {
    // Accedemos a nuestro contenedor de los enlaces
    const navbarContainer = document.querySelector('.navbar__list');

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
    });
};

export { initNavBar };