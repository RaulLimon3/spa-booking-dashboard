import { renderStatusAppointments, renderTotalAppointments } from "../app";
import { renderValue, statCard } from "../components/cards";
import { appointmenteColumns } from "../components/columns";
import { table } from "../components/tables";
import { citas } from "../store/store";

export const renderCitas = () => {
    const totalAppointmentes = renderTotalAppointments();
    const statusAppointments = renderStatusAppointments();
    return `
        <div class="dashboard" id="appointments">
            <div class="dashboard__statistics">
            ${statCard({icon: './src/assets/icons/book-open.svg', text: 'Total de citas', value: renderValue(totalAppointmentes)})}
            ${statCard({icon: './src/assets/icons/book-check.svg', text: 'Citas atendidas', value: renderValue(statusAppointments.attended)})}
            ${statCard({icon: './src/assets/icons/book-alert.svg', text: 'Citas pendientes', value: renderValue(statusAppointments.pending)})}
            ${statCard({icon: './src/assets/icons/book-x.svg', text: 'Citas canceladas', value: renderValue(statusAppointments.canceled)})}
                
            </div>
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-plus.svg" alt="Icono de nuevas citas">
                            <p class="card__text">Nuevas citas</p>
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
                        ${table({
                            columns: appointmenteColumns,
                            data: citas
                        })}
                        <div class="card__table">
                            <table class="table">
                                <thead class="table__heading">
                                    <tr>
                                        <th class="table__col">Cliente</th>
                                        <th class="table__col">Servicio</th>
                                        <th class="table__col">Fecha</th>
                                        <th class="table__col">Hora</th>
                                        <th class="table__col">Status</th>
                                        <th class="table__col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="table__body" id="appointmentsTableBody">
                                    <tr class="table__row">
                                        <td class="table__cell">Raul Limon</td>
                                        <td class="table__cell">Facial</td>
                                        <td class="table__cell">07/05/2026</td>
                                        <td class="table__cell">14:00</td>
                                        <td class="table__cell">
                                            <span class="badge">Pendiente</span>
                                        </td>
                                        <td class="table__cell">...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};