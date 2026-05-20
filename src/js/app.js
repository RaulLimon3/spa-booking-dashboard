import { toggleDropdown } from "./components/dropdown";
import { initNavBar, toggleSidebar } from "./components/navbar";
import { initAppointments, renderCitas } from "./modules/citas";
import { initClients, renderClientes } from "./modules/clientes";
import { renderDashboard } from "./modules/dashboard";
import { renderServicios } from "./modules/servicios";
import { citas } from "./store/store";

// Cargamos el contenido 
initNavBar();

toggleSidebar();

toggleDropdown();

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

// Mostramos el panel de control inicial
dashboardSection.innerHTML = routes.Dashboard.render();

// Accedemos a la secciones existentes
const currentSection = document.querySelectorAll('[data-section]');

// Esperamos a que den clic sobre la seccion a elegir
currentSection.forEach(btn => {
    btn.addEventListener('click', () => {
        // Extraemos el valor de la seccion
        const section = btn.dataset.section;
        const currentRoute = routes[section];
        // Mostramos el dashboard correspondiente
        dashboardSection.innerHTML = currentRoute.render();

        if (currentRoute.init) {
            currentRoute.init();
        }
    });
});