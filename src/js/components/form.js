import { closeModal } from "../modules/modals";

const initForm = () => {
    // Accedemos a nuestros elementos de nuestro formulario
    const appointmentForm = document.getElementById('appointmentForm');
    const errorFormMessage = document.getElementById('formError');
    const inputs = appointmentForm.querySelectorAll('.input');

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Extraemos los datos
        const data = getFormData(appointmentForm);

        // Validamos que los campos no esten vacios
        const hasEmptyFields = Object.values(data).some(value => !value);

        if (hasEmptyFields) {
            showError(errorFormMessage, 'Por favor completa todos los campos', inputs);
            return;
        }
        
        // Limpiamos le formulario
        appointmentForm.reset();
        
        clearError(errorFormMessage, inputs);

        // Cerramos el modal
        closeModal();

        console.log(data);
    });
};

const getFormData = (form) => {
    return {
        customerName: form.customerName.value.trim(),
        customerPhone: form.customerPhone.value.trim(),
        service: form.serviceInput.value,
        date: form.appointmentDate.value,
        hour: form.appointmentHour.value
    };
};

const showError = (element, message, inputs) => {
    element.textContent = message;
    element.style.display = 'block';
    inputs.forEach(input => {
        input.classList.add('input__error');
    });
}

const clearError = (element, inputs) => {
    element.textContent = '';
    element.style.display = 'none';
    inputs.forEach(input => {
        input.classList.remove('input__error');
    });
};

const resetFormState = () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const errorFormMessage = document.getElementById('formError');
    const inputs = appointmentForm.querySelectorAll('.input');
    appointmentForm.reset();
    clearError(errorFormMessage, inputs);
}


export { initForm, resetFormState }