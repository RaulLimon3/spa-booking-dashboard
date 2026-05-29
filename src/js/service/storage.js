const STORAGE_KEY = 'appointments';

const getAppointments = () => { 
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const saveAppointments = (data) => { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export { getAppointments, saveAppointments };