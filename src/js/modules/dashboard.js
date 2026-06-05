import { currentRoute, renderRoute } from "../app";
import { statCard, appointmentCard, emptyCard } from "../components/cards";
import { dashboardColumns } from "../components/columns";
import { table } from "../components/tables";
import { getLastestAppointments, getNewAppointments, getUpcomingAppointmentsToday, getTodayAppointments, getTotalClients, getTotalIncomes, updateAppointmentStatus } from "../service/appointments";
import { getAppointments, saveAppointments } from "../service/storage";
import { currencyFormat } from "../utils/helpers";
import { openSuccessModal } from "./modals";

export const renderDashboard = (appointments) => {
    // Extraemos los datos
    const todayAppointments = getTodayAppointments(appointments);
    const totalIncomes = getTotalIncomes(appointments);
    const newAppointments = getNewAppointments(appointments);
    const totalClients = getTotalClients(appointments);
    const upComingAppointments = getUpcomingAppointmentsToday(appointments);
    const lastestAppointments = getLastestAppointments(appointments);

    // Mostramos nuestro Dashboard
    return `
        <div class="dashboard" id="dashboard">
            <div class="dashboard__statistics">
            ${statCard({ icon: './src/assets/icons/calendar.svg', text: 'Total de citas hoy', value: todayAppointments })}
            ${statCard({ icon: './src/assets/icons/banknote-arrow-up.svg', text: 'Total de ingresos', value: currencyFormat(totalIncomes) })}
            ${statCard({ icon: './src/assets/icons/calendar-plus.svg', text: 'Total de citas nuevas', value: newAppointments })}
            ${statCard({ icon: './src/assets/icons/book-user.svg', text: 'Total de clientes', value: totalClients })}
            </div>
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/calendar-clock.svg" alt="Icono de citas proximas">
                            <p class="card__text">Proximas citas</p>
                        </div>
                        <div class="card__appointment">
                            ${upComingAppointments.length ?
                                renderUpcomingAppointments(upComingAppointments)
                                : emptyCard()
                            }
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-plus.svg" alt="Icono de nuevas citas">
                            <p class="card__text">Nuevas citas</p>
                        </div>
                        ${table({
                            columns: dashboardColumns,
                            data: lastestAppointments
                        })}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderUpcomingAppointments = (appointments) => {
    return appointments.map(appointment =>
        appointmentCard({
            id: appointment.id,
            name: appointment.cliente,
            service: appointment.servicio.nombre,
            date: appointment.fecha,
            hour: appointment.hora
        })
    ).join('');
};

const initDashboard = () => {
    const dashboard = document.getElementById('dashboard');
    dashboard?.addEventListener('click', (e) => {
        const completeBtn = e.target.closest('.btn-complete-appointment');
        const cancelBtn = e.target.closest('.btn-cancel-appointment');

        if (completeBtn) {
            const id = completeBtn.dataset.id;
            handelAppointmentStatus(id, 'atendido');
        }

        if (cancelBtn) {
            const id = cancelBtn.dataset.id;
            handelAppointmentStatus(id, 'cancelado');
        }
    });
};

const handelAppointmentStatus = (id, status) => {
    const appointments = getAppointments();

    const updateAppointments = updateAppointmentStatus(appointments, id, status);

    saveAppointments(updateAppointments);

    renderRoute(currentRoute);

    openSuccessModal(
        status === 'atendido'
            ? 'Cita completada exitosamente'
            : 'Cita cancelada exitosamente'
    );
};

export { initDashboard };