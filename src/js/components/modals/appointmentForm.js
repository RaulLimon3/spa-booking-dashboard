export const appointmentModal = (appointment = null, mode = "create") => {
    return `
    <div class="modal__form-container">
        <div class="modal__heading">
            <h2 class="modal__title" id="modalTittle">${mode === 'edit' ? 'Editar cita' : 'Crear nueva cita'}</h2>
            <button type="button" class="btn modal__close" id="closeModal">
                <img src="./src/assets/icons/x.svg" alt="Icono de cerrar" class="icon">
            </button>
        </div>
        <form class="form__appointment" id="appointmentForm" data-id="${appointment?.id || ''}">
            <span class="form__error-message" id="formError">Lorem ipsum dolor sit amet.</span>
            <div class="form__group">
                <label for="customerName">Nombre del cliente</label>
                <input type="text" name="customerName" id="customerName" class="input" value="${appointment?.cliente || ''}">
                <span class="form__group-error-message" id="customerNameError">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="customerPhone">Número telefonico</label>
                <input type="tel" name="customerPhone" id="customerPhone" class="input" value="${appointment?.telefono || ''}">
                <span class="form__group-error-message" id="customerPhoneError">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="serviceInput">Servicios</label>
                <select name="serviceInput" class="input" id="serviceInput">
                    <option value="" disabled selected hidden>Servicios</option>
                    <option value="facial" ${appointment?.servicio.nombre === 'Facial' ? 'selected' : ''}>Facial</option>
                    <option value="masaje" ${appointment?.servicio.nombre === 'Masaje' ? 'selected' : ''}>Masaje</option>
                </select>
                <span class="form__group-error-message" id="serviceError">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="appointmentDate">Fecha de la cita</label>
                <div class="form__input-group">
                    <input type="date" name="appointmentDate" id="appointmentDate" class="input input--full" value="${appointment?.fecha || ''}">
                    <button type="button" class="btn__cross">
                        <img src="./src/assets/icons/x.svg" alt="Icono de cerrar" class="icon">
                    </button>
                </div>
                <span class="form__group-error-message" id="appointmentDateError">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="appointmentHour">Hora de la cita</label>
                <div class="form__input-group">
                    <input type="time" name="appointmentHour" id="appointmentHour" class="input input--full" value="${appointment?.hora || ''}">
                    <button type="button" class="btn__cross">
                        <img src="./src/assets/icons/x.svg" alt="Icono de cerrar" class="icon">
                    </button>
                </div>
                <span class="form__group-error-message" id="appointmentHourError">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <button type="submit" class="btn btn__success" id="modalBtn">${mode === 'edit' ? 'Actualizar cita' : 'Guardar cita'}</button>
        </form>
    </div>
    `;
};