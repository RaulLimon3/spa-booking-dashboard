import { statCard, appointmentCard, emptyCard } from "../components/cards";
import { dashboardColumns } from "../components/columns";
import { table } from "../components/tables";
import { getNewAppointments, getNextUpComingAppointments, getTodayAppointments, getTotalClients, getTotalIncomes } from "../service/appointments";
import { citas } from "../store/store";
import { currencyFormat } from "../utils/helpers";

export const renderDashboard = () => {
    // Extraemos los datos
    const todayAppointments = getTodayAppointments(citas);
    const totalIncomes = getTotalIncomes(citas);
    const newAppointments = getNewAppointments(citas);
    const totalClients = getTotalClients(citas);
    const upComingAppointments = getNextUpComingAppointments(citas);

    // Mostramos nuestro Dashboard
    return `
        <div class="dashboard" id="dashboard">
            <div class="dashboard__statistics">
            ${statCard({icon: './src/assets/icons/calendar.svg', text: 'Total de citas hoy', value: todayAppointments})}
            ${statCard({icon: './src/assets/icons/banknote-arrow-up.svg', text: 'Total de ingresos', value: currencyFormat(totalIncomes)})}
            ${statCard({icon: './src/assets/icons/calendar-plus.svg', text: 'Total de citas nuevas', value: newAppointments})}
            ${statCard({icon: './src/assets/icons/book-user.svg', text: 'Total de clientes', value: totalClients})}
            </div>
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/calendar-clock.svg" alt="Icono de citas proximas">
                            <p class="card__text">Proxima cita</p>
                        </div>
                        <div class="card__appointment">
                            ${upComingAppointments.length ? 
                                renderUpcomingAppointments(upComingAppointments)
                                : emptyCard()
                            }
                            <div class="card__information">
                                <div class="card__data">
                                    <div class="card__username">
                                        <p>Raul Limon</p>
                                    </div>
                                    <div class="card__date-information">
                                        <span class="card__date">06/05/2026</span>
                                        <span class="card__hour">14:26p.m</span>
                                    </div>
                                </div>
                                <div class="card__buttons">
                                    <button type="button" class="btn btn__danger">Cancelar</button>
                                    <button type="button" class="btn btn__success">Completado</button>
                                </div>
                            </div>
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
                            data: citas
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
            name: appointment.cliente,
            date: appointment.fecha,
            hour: appointment.hora
        })
    ).join('');
};