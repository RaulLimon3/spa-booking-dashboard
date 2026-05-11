import { initNavBar, toggleSidebar } from "./components/navbar";
import { renderCitas } from "./modules/citas";
import { renderClientes } from "./modules/clientes";
import { renderDashboard } from "./modules/dashboard";
import { renderServicios } from "./modules/servicios";

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