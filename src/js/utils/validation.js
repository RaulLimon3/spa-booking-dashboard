// Validamos que los campos no esten vacios
const isEmpty = (value) => !value || !value.trim();

// Validamos la longitud que debe de tener los numeros telefonicos
const isPhoneValid = (value) => value.trim().length >= 8; 

// Validamos la fecha
const isDateValid = (value) => {
    return !!value;
}

// Validamos el servicios
const isServiceValid  = (value) => {
    return value && value !== '';
}

export { isEmpty, isPhoneValid, isDateValid, isServiceValid };