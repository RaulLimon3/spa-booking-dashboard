import { initModal } from "./modules/modals";
import { initNavBar, toggleSidebar } from "./components/navbar";
import { initAppointments, renderCitas } from "./modules/citas";
import { initClients, renderClientes } from "./modules/clientes";
import { renderDashboard } from "./modules/dashboard";
import { renderServicios } from "./modules/servicios";
import { citas } from "./store/store";
import { getAppointments } from "./service/storage";

let currentRoute = null;

// Cargamos el contenido 
initNavBar();

toggleSidebar();

initModal();

// Accedemos a nuestro contenedor dinamico
const dashboardSection = document.getElementById('dashboardSection');

// Declaramos nuestos paneles existente
const routes = {
    Dashboard: {
        render: renderDashboard
    },
    Citas: {
        render: renderCitas,
        init: initAppointments
    },
    Clientes: {
        render: renderClientes,
        init: initClients
    },
    Servicios: {
        render: renderServicios
    }
};

const renderRoute = (route) => {
    const appointments = getAppointments();

    currentRoute = route;

    dashboardSection.innerHTML = route.render(appointments);

    if (route.init) {
        route.init();
    }
};

// Mostramos el panel de control inicial
renderRoute(routes.Dashboard);

// Accedemos a la secciones existentes
const currentSection = document.querySelectorAll('[data-section]');

// Esperamos a que den clic sobre la seccion a elegir
currentSection.forEach(btn => {
    btn.addEventListener('click', () => {
        // Extraemos el valor de la seccion
        const section = btn.dataset.section;
        const currentRouteSelected = routes[section];
        // Mostramos el dashboard correspondiente
        renderRoute(currentRouteSelected);
    });
});

export { renderRoute, currentRoute }; 