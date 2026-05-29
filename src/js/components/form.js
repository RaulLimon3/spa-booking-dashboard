import { closeModal } from "../modules/modals";
import { getAppointments, saveAppointments } from "../service/storage";
import { generateAppointmentId } from "../utils/generateId";
import { services } from "../utils/services";

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
        const hasEmptyFields = Object.values(data).every(value => !value);

        if (hasEmptyFields) {
            showError(errorFormMessage, 'Por favor completa todos los campos', inputs);
            return;
        }

        clearError(errorFormMessage, inputs);

        // Validamos cada campo de manera individual
        const customerNameError = document.getElementById('customerNameError');
        const phoneNumberError = document.getElementById('customerPhoneError');
        const serviceError = document.getElementById('serviceError');
        const dateError = document.getElementById('appointmentDateError');
        const hourError = document.getElementById('appointmentHourError');

        const customerValidation = validateCustomer(data.customerName);
        const phoneValidation = validatePhone(data.customerPhone);
        const serviceValidation = validateService(data.service);
        const dateValidation = validateDate(data.date);
        const hourValidation = validateHour(data.hour);

        const hasCustomerError = validateField(appointmentForm.customerName, customerNameError, customerValidation);
        const hasPhoneError = validateField(appointmentForm.customerPhone, phoneNumberError, phoneValidation);
        const hasServiceError = validateField(appointmentForm.serviceInput, serviceError, serviceValidation);
        const hasDateError = validateField(appointmentForm.appointmentDate, dateError, dateValidation);
        const hasHourError = validateField(appointmentForm.appointmentHour, hourError, hourValidation);

        if (hasCustomerError || hasPhoneError || hasServiceError || hasDateError || hasHourError) return;

        // Guardamos los datos en localStorage
        const appointments = getAppointments();

        const selectedService = services[data.service];

        const newAppointment = {
            id: generateAppointmentId(),
            cliente: data.customerName,
            telefono: data.customerPhone,
            servicio: selectedService,
            fecha: data.date,
            hora: data.hour,
            status: 'pendiente'
        };

        console.log(newAppointment);

        appointments.unshift(newAppointment);

        saveAppointments(appointments);

        // Limpiamos le formulario
        appointmentForm.reset();

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
    const inputErrors = appointmentForm.querySelectorAll('.form__group-error-message');
    appointmentForm.reset();
    clearError(errorFormMessage, inputs);
    cleanInputsError(inputErrors);
}

const validateField = (input, errorElement, validation) => {
    if (validation) {
        showInputError(input, errorElement, validation);
        return true;
    }

    clearInputError(input, errorElement);

    return false;
};

const showInputError = (input, element, message) => {
    input.classList.add('input__error');
    element.textContent = message;
    element.style.display = 'block';
};

const clearInputError = (input, element) => {
    input.classList.remove('input__error');
    element.textContent = '';
    element.style.display = 'none';
};

const cleanInputsError = (elements) => {
    elements.forEach(element => {
        element.textContent = ''
        element.style.display = 'none';
    });
};

const validateCustomer = (value) => {
    value = value.trim().replace(/\s+/g, ' ');

    if (value.length < 3) {
        return 'El nombre debe tener al menos 3 caracteres.'
    }

    const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    if (!regexName.test(value)) {
        return 'El nombre solo debe contener letras y espacios.'
    }

    return null;
};

const validatePhone = (value) => {
    const regexPhoneNumber = /^[0-9]{10}$/;

    if (!regexPhoneNumber.test(value)) {
        return 'Número de telefono no valido';
    }

    return null;
}

const validateService = (value) => {
    if (value === '') {
        return 'Por favor, selecciona una opción valida';
    }

    return null;
};

const validateDate = (value) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(value);

    if (selectedDate < today) {
        return 'No puedes seleccionar una fecha pasada';
    }

    return null;
};

const validateHour = (value) => {
    if (value < '09:00' || value > '18:00') {
        return 'Horario fuera de servicio';
    }
    return null;
};

export { initForm, resetFormState }