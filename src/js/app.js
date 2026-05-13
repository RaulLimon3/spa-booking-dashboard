import { initNavBar, toggleSidebar } from "./components/navbar";
import { renderCitas } from "./modules/citas";
import { renderClientes } from "./modules/clientes";
import { renderDashboard } from "./modules/dashboard";
import { renderServicios } from "./modules/servicios";
import { citas } from "./store/store";

const renderTotalClients = () => {
    return citas.length;
}

const renderTotalIncomes = () => {
    return citas.reduce((acc, cita) => acc + cita.servicio.precio, 0);
}

const renderNewAppointments = () => {
    return citas.filter(cita => cita.estado === 'pendiente').length;
}

const renderTodayAppointments = () => {
    const today = new Date().toISOString().split('T')[0];

    return citas.reduce((acc, cita) => {
        return cita.fecha === today
            ? acc + 1
            : acc;
    }, 0);
};

const renderTotalAppointments = () => {
    return renderTotalClients();
};

const renderStatusAppointments = () => {
    return citas.reduce((acc, cita) => {
        if (cita.estado === 'atendida') acc.attended++;
        else if (cita.estado === 'pendiente') acc.pending++;
        else acc.canceled++;
        return acc;
    }, {attended: 0, pending: 0, canceled: 0});
};

// Cargamos el contenido 
initNavBar();

toggleSidebar();

// Accedemos a nuestro contenedor dinamico
const dashboardSection = document.getElementById('dashboardSection');

// Declaramos nuestos paneles existente
const routes = {
    Dashboard: renderDashboard,
    Citas: renderCitas,
    Clientes: renderClientes,
    Servicios: renderServicios
}

// Mostramos el panel de control inicial
dashboardSection.innerHTML = routes.Dashboard();

// Accedemos a la secciones existentes
const currentSection = document.querySelectorAll('[data-section]');

// Esperamos a que den clic sobre la seccion a elegir
currentSection.forEach(btn => {
    btn.addEventListener('click', () => {
        // Extraemos el valor de la seccion
        const section = btn.dataset.section;
        // Mostramos el dashboard correspondiente
        dashboardSection.innerHTML = routes[section]();
    });
});

export {renderTotalClients, renderTodayAppointments, renderTotalIncomes, 
    renderNewAppointments, renderTotalAppointments, renderStatusAppointments }