import { initForm, resetFormState } from "../components/form";
import { appointmentModal } from "../components/modals/appointmentForm";

const modal = document.getElementById('modal');

const modalContent = document.getElementById('modalContent');

const renderModalContent = (content) => {
    if (!modalContent) return;
    modalContent.innerHTML = content;
}

const initModal = () => {
    // Acceder al boton para abrir el modal
    const openModalBtn = document.getElementById('btnAdd');

    if (!openModalBtn || !modal) return;

    // Abrimos el modal
    openModalBtn.addEventListener('click', () => {
        // Renderizamos nuestro contenido
        openCreateModal();
    });

    // Cerramos el modal
    modal.addEventListener('click', (e) => {
        if (e.target.closest('#closeModal')) {
            closeModal();
        }

        if (e.target === modal) {
            closeModal();
        }
    });
};

const openModal = () => {
    modal.classList.add('modal--active');
};

const closeModal = () => {
    resetFormState?.();
    modal.classList.remove('modal--active');
};

const openEditModal = (appointment) => {
    openModal();
    renderModalContent(appointmentModal(appointment, 'edit'));
    initForm();
};

const openCreateModal = () => {
    renderModalContent(appointmentModal());
    initForm();
    openModal();
}

export { initModal, renderModalContent, closeModal, openEditModal };