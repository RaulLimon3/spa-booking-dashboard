import { currentRoute, renderRoute } from "../app";
import { initForm, resetFormState } from "../components/form";
import { appointmentModal } from "../components/modals/appointmentForm";
import { stateModal } from "../components/modals/stateModal";
import { updateAppointments } from "../service/appointments";
import { getAppointments, saveAppointments } from "../service/storage";

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
    renderModalContent(appointmentModal(appointment, 'edit'));
    initForm();
    openModal();
};

const openCreateModal = () => {
    renderModalContent(appointmentModal());
    initForm();
    openModal();
}

const openSuccessModal = (message) => {
    renderModalContent(
        stateModal({
            type: 'success',
            message
        })
    );

    openModal();

    setTimeout(() => {
        closeModal();
    }, 1500);
};

const openConfirmModal = (appointmentId) => {
    renderModalContent(
        stateModal({
            type: 'confirm',
            appointmentId
        })
    );

    openModal();

    const cancelBtn = document.getElementById('cancelBtn');
    const confirmBtn = document.getElementById('confirmBtn');

    cancelBtn?.addEventListener('click', () => {
        closeModal();
    });

    confirmBtn?.addEventListener('click', () => {
        const id = confirmBtn.dataset.id;
        deleteAppointment(id);
    });
};

const deleteAppointment = (id) => {
    const appointments = getAppointments();
    const updatedAppointments = updateAppointments(appointments, id);
    saveAppointments(updatedAppointments);
    closeModal();
    renderRoute(currentRoute);
    openSuccessModal('Cita eliminada exitosamente');
};

export {
    initModal, renderModalContent, closeModal, openEditModal,
    openSuccessModal, openConfirmModal
};