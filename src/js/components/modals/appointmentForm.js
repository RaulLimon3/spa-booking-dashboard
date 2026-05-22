export const appointmentModal = () => {
    return `
    <div class="modal__form-container">
        <div class="modal__heading">
            <h2 class="modal__title" id="modalTittle">Crear nueva cita</h2>
            <button type="button" class="btn modal__close" id="closeModal">
                <img src="./src/assets/icons/x.svg" alt="Icono de cerrar" class="icon">
            </button>
        </div>
        <form class="form__appointment" id="appointmentForm">
            <span class="form__error-message" id="formError">Lorem ipsum dolor sit amet.</span>
            <div class="form__group">
                <label for="customerName">Nombre del cliente</label>
                <input type="text" name="customerName" id="customerName" class="input">
                <span class="form__group-error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="customerPhone">Número telefonico</label>
                <input type="tel" name="customerPhone" id="customerPhone" class="input">
                <span class="form__group-error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="serviceInput">Servicios</label>
                <select name="serviceInput" class="input" id="serviceInput">
                    <option value="" disabled selected hidden>Servicios</option>
                    <option value="facial">Facial</option>
                    <option value="masaje">Masaje</option>
                </select>
                <span class="form__group-error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="appointmentDate">Fecha de la cita</label>
                <input type="date" name="appointmentDate" id="appointmentDate" class="input">
                <span class="form__group-error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="form__group">
                <label for="appointmentHour">Hora de la cita</label>
                <input type="time" name="appointmentHour" id="appointmentHour" class="input" min="09:00" max="18:00">
                <span class="form__group-error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <button type="submit" class="btn btn__success" id="modalBtn">Guardar cita</button>
        </form>
    </div>
    `;
};