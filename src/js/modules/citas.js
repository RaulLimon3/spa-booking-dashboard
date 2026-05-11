export const renderCitas = () => {
    return `
        <div class="dashboard" id="appointments">
            <div class="dashboard__statistics">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-open.svg" alt="Icono de total de citas">
                            <p class="card__text">Total de citas</p>
                        </div>
                        <span class="card__summary" id="totalAppointments">0</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-check.svg" alt="Icono de citas atendidas">
                            <p class="card__text">Citas atendidas</p>
                        </div>
                        <span class="card__summary" id="attendedAppointments">0</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-alert.svg" alt="Icono de citas pendientes">
                            <p class="card__text">Citas pendientes</p>
                        </div>
                        <span class="card__summary" id="pendignAppointments">0</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-x.svg" alt="Icono de citas canceladas">
                            <p class="card__text">Citas canceladas</p>
                        </div>
                        <span class="card__summary" id="canceledAppointments">0</span>
                    </div>
                </div>
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