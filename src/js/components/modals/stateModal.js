const stateModal  = ({type, message = '', appointmentId = null}) => {
    const content = {
        success: successModalState(message),
        confirm: confirmModalState(appointmentId)
    };

    return `
        <div class="modal__state-container">
            <div class="modal__state-alert">
                ${content[type] || ''}
            </div>
        </div>
    `;
};

const successModalState = (message) => {
    return `
        <div class="modal__state-icon modal__state-check">✔</div>
        <span class="modal__message">${message}</span>
    `;
};

const confirmModalState = (appointmentId) => {
    return `
        <div class="modal__state-icon modal__state-warning">!</div>
        <p class="modal__message">¿Deseas eleminar esta cita?</p>
        <div class="modal__action-btn">
            <button type="button" class="btn btn__danger" id="cancelBtn">Cancelar</button>
            <button type="button" class="btn btn__success" id="confirmBtn" data-id="${appointmentId}">Confirmar</button>
        </div>
    `;
};

export { stateModal };