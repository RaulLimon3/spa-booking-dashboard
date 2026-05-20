/* 📌 Dashboard principal */

// Obtenemos el total de clientes
const getTotalClients = (appointments) => {
    // Extraemos los clientes
    const clients = appointments.map(cita => cita.cliente);
    // Verificamos si hay repetidos
    const uniqueClients = new Set(clients);
    // Contamos los clientes
    return uniqueClients.size;
}

// Obtenemos el de ingresos en base a las citas atendidas
const getTotalIncomes = (appointments) => {
    return appointments.filter(cita => cita.estado === 'atendido').reduce((acc, cita) => acc + cita.servicio.precio, 0);
}

// Obtenemos las nuevas citas registradas (citas pendientes)
const getNewAppointments = (appointments) => {
    return appointments.filter(cita => cita.estado === 'pendiente').length;
}

// Obtenemos el total de citas del dia
const getTodayAppointments = (appointments) => {
    const today = getCurrentDay();

    return appointments.reduce((acc, cita) => {
        return cita.fecha === today
            ? acc + 1
            : acc;
    }, 0);
};

const getCurrentDay = () => {
    return new Date().toISOString().split('T')[0];
}

const getNextUpComingAppointments = (appointments) => {
    // Establecemos el dia de hoy
    const currentDay = getCurrentDay();

    // Obtnenemos el total de citas
    const totalAppointments = getTodayAppointments(appointments);

    // Devolvemos las sitas 
    return appointments.filter(appointment => appointment.fecha === currentDay)
    .sort((a, b) => a.hora.localeCompare(b.hora)).slice(0, totalAppointments);
};

/* 📌 Citas */

// Obtener el total de citas
const getTotalAppointments = (appointments) => {
    return appointments.length;
};

// Obtener el total de citas en base a su status
const getStatusAppointments = (appointments) => {
    return appointments.reduce((acc, cita) => {
        if (cita.estado === 'atendido') acc.attended++;
        else if (cita.estado === 'pendiente') acc.pending++;
        else acc.canceled++;
        return acc;
    }, { attended: 0, pending: 0, canceled: 0 });
};

const filterAppointments = (appointments, filters) => {
    let filtered = appointments;

    filtered = searchAppointments(filtered, filters.query);
    filtered = filterByDate(filtered, filters.date);
    filtered = filterByStatus(filtered, filters.status);
    filtered = filterByService(filtered, filters.service);

    return filtered;
};

const searchAppointments = (appointments,query) => {
    // Verificamos que haya busqueda
    if (!query) {
        return appointments;
    }
    const normalizedQuery = query.trim().toLowerCase();
    return appointments.filter(appointment => 
        appointment.cliente.toLowerCase().includes(normalizedQuery) ||
        appointment.telefono.toString().includes(normalizedQuery)
    );
};

const filterByDate = (appointments, date) => {
    if (!date) return appointments;
    return appointments.filter(cita => cita.fecha === date);
};

const filterByStatus = (appointments, status) => {
    if (!status || status === 'todos') return appointments;
    return appointments.filter(cita => cita.estado === status);
};

const filterByService = (appointments, service) => {
    if (!service || service === 'todos') return appointments;
    return appointments.filter(cita => cita.servicio.nombre.toLowerCase() === service.toLowerCase())
};

export { getTotalClients, getTotalIncomes, getNewAppointments, 
    getTodayAppointments, getStatusAppointments, getTotalAppointments,
    filterAppointments, searchAppointments, getNextUpComingAppointments };