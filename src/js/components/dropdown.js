export const toggleDropdown = () => {
    document.addEventListener('click', (e) => {
        // Establecemos el boton a cliquear
        const dropdownBtn = e.target.closest('.dropdown__toggle');
        // Verificamos que se de clic sobre el boton
        if (!dropdownBtn) {
            closeAllDropdowns();
            return;
        };
        // Accedemos al contenedor
        const dropdownContainer = dropdownBtn.closest('.dropdown');
        // Accedemos al menu desplegable
        const dropdownOptions = dropdownContainer.querySelector('.dropdown__options');
        const isOpen = !dropdownOptions.classList.contains('dropdown--hidden');
        closeAllDropdowns();
        if (!isOpen) {
            dropdownOptions.classList.remove('dropdown--hidden');
        }
    });
};

const closeAllDropdowns = () => {
    // Accedemos al contenido desplegable
    document.querySelectorAll('.dropdown__options').forEach(drop => {
        drop.classList.add('dropdown--hidden');
    });
};