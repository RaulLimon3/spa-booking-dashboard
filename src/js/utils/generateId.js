const APPOINTMENTS_ID_KEY = 'appointments_last_id';

export const generateAppointmentId = () => {
    const currentId = Number(localStorage.getItem(APPOINTMENTS_ID_KEY)) || 0;
    const newId = currentId + 1;
    localStorage.setItem(APPOINTMENTS_ID_KEY, newId);
    return newId;
}