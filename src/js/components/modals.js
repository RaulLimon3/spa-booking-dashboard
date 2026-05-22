const modal = document.getElementById('modal');


const initModal = () => {
    // Acceder al boton para abrir el modal
    const openModalBtn = document.getElementById('btnAdd');

    // Accedemos al boton para cerrar el modal
    const closeModalBtn = document.getElementById('closeModal');

    if (!openModalBtn || !closeModalBtn || !modal) return;

    // Abrimos el modal
    openModalBtn.addEventListener('click', openModal);

    // Cerramos el modal
    closeModalBtn.addEventListener('click', closeModal);
};

const openModal = () => {
    modal.classList.add('modal--active');
};

const closeModal = () => {
    modal.classList.remove('modal--active');
};

export { initModal };