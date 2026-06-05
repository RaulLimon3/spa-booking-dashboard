import { renderValue, statCard } from "../components/cards";
import { appointmenteColumns } from "../components/columns";
import { toggleDropdown } from "../components/dropdown";
import { table } from "../components/tables";
import { filterAppointments, getAppointmentById, getStatusAppointments, getTotalAppointments } from "../service/appointments";
import { getAppointments } from "../service/storage";
import { citas } from "../store/store";
import { openConfirmModal, openEditModal } from "./modals";

let currentAppointments = [];
// Establecemos los filtros por defecto
const filters = {
    query: '',
    date: '',
    status: '',
    service: ''
};

// Creamos la función para renderizar la tabla con filtros
const renderAppointmentsTable = () => {
    const filterdeAppointments = filterAppointments(currentAppointments, filters);

    const tableContainer = document.getElementById('appointmentsTableContainer');

    if (!tableContainer) return;

    tableContainer.innerHTML = table({
        columns: appointmenteColumns,
        data: filterdeAppointments
    });
}

const initFilterControl = () => {
    const clearFilterBtn = document.getElementById('clearFilters');
    clearFilterBtn?.addEventListener('click', () => {
        filters.query = '';
        filters.date = '';
        filters.status = '';
        filters.service = '';

        document.getElementById('appointmentsSearch').value = '';
        document.getElementById('appointmentsDate').value = '';
        document.getElementById('appointmentStatus').selectedIndex = 0;
        document.getElementById('service').selectedIndex = 0;

        renderAppointmentsTable();
    });
};

const initAppointments = () => {
    toggleDropdown({ onEdit: handleEditAppointment, onDelete: handleDeleteAppointment });

    initFilterControl();

    const searchInput = document.getElementById('appointmentsSearch');
    const dateInput = document.getElementById('appointmentsDate');
    const statusInput = document.getElementById('appointmentStatus');
    const serviceInput = document.getElementById('service');

    if (!searchInput || !dateInput || !statusInput || !serviceInput) return;

    searchInput.addEventListener('input', (e) => {
        filters.query = e.target.value;
        renderAppointmentsTable();
    });

    dateInput.addEventListener('change', (e) => {
        filters.date = e.target.value;
        renderAppointmentsTable();
    });

    statusInput.addEventListener('change', (e) => {
        filters.status = e.target.value;
        renderAppointmentsTable();
    });

    serviceInput.addEventListener('change', (e) => {
        filters.service = e.target.value;
        renderAppointmentsTable();
    });
}

const handleEditAppointment = (id) => {
    const appointment = getAppointmentById(currentAppointments, id);
    openEditModal(appointment);
};

const handleDeleteAppointment = (id) => {
    const appointments = getAppointments();
    openConfirmModal(id);
}

const renderCitas = (appointments) => {
    currentAppointments = appointments;
    const totalAppointmentes = getTotalAppointments(appointments);
    const statusAppointments = getStatusAppointments(appointments);
    return `
        <div class="dashboard" id="appointments">
            <div class="dashboard__statistics">
            ${statCard({ icon: './src/assets/icons/book-open.svg', text: 'Total de citas', value: totalAppointmentes })}
            ${statCard({ icon: './src/assets/icons/book-check.svg', text: 'Citas atendidas', value: statusAppointments.attended })}
            ${statCard({ icon: './src/assets/icons/book-alert.svg', text: 'Citas pendientes', value: statusAppointments.pending })}
            ${statCard({ icon: './src/assets/icons/book-x.svg', text: 'Citas canceladas', value: statusAppointments.canceled })}
            </div>
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <div class="card__heading-titel">
                                <img src="./src/assets/icons/book-plus.svg" alt="Icono de nuevas citas">
                                <p class="card__text">Nuevas citas</p>
                            </div>
                            <button type="button" class="btn__cross" id="clearFilters">
                                <img src="./src/assets/icons/funnel-x.svg" alt="Icono de cerrar" class="icon">
                            </button>
                        </div>
                        <div class="card__panel-control">
                            <div class="filters">
                                <div class="searchbar">
                                    <input type="text" name="search" id="appointmentsSearch" class="input input__search" placeholder="Buscar">
                                </div>
                                <div class="filters__input">
                                    <input class="filter input" type="date" name="date" id="appointmentsDate">
                                    <select class="filter filter--select input" name="status" id="appointmentStatus">
                                        <option value="" disabled selected hidden>Status</option>
                                        <option value="todos">Todos</option>
                                        <option value="pendiente">Pendiente</option>
                                        <option value="atendido">Atendido</option>
                                        <option value="cancelado">Cancelado</option>
                                    </select>
                                    <select class="filter filter--select input" name="service" id="service">
                                        <option value="" disabled selected hidden>Servicio</option>
                                        <option value="todos">Todos</option>
                                        <option value="facial">Facial</option>
                                        <option value="masaje">Masaje</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="appointmentsTableContainer">
                            ${table({
                                columns: appointmenteColumns,
                                data: appointments
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export { initAppointments, renderCitas };