import { initNavBar } from "./components/navbar";
import { renderCitas } from "./modules/citas";
import { renderClientes } from "./modules/clientes";
import { renderDashboard } from "./modules/dashboard";
import { renderServicios } from "./modules/servicios";

// Cargamos el contenido 
initNavBar();

// Accedemos a nuestro contenedor dinamico
const dashboardSection = document.getElementById('dashboardSection');

// Declaramos nuestos paneles existente
const routes = {
    Dashboard: renderDashboard,
    Citas: renderCitas,
    Clientes: renderClientes,
    Servicios: renderServicios
}

// dashboardSection.innerHTML = routes.Dashboard();

// Accedemos a la seccion activa
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