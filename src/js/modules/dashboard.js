export const renderDashboard = () => {
    return `
        <div class="dashboard" id="dashboard">
            <div class="dashboard__statistics">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/calendar.svg" alt="Icono de calendario">
                            <p class="card__text">Total de citas hoy</p>
                        </div>
                        <span class="card__summary" id="quotesToday">0</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/banknote-arrow-up.svg" alt="Icono de ingresos">
                            <p class="card__text">Total de ingresos</p>
                        </div>
                        <span class="card__summary" id="totalIncome">0</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/calendar-plus.svg" alt="Icono de nuevas citas">
                            <p class="card__text">Total de citas nuevas</p>
                        </div>
                        <span class="card__summary" id="newQuotes">0</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-user.svg" alt="Icono de clientes">
                            <p class="card__text">Total de clientes</p>
                        </div>
                        <span class="card__summary" id="totalClients">0</span>
                    </div>
                </div>
            </div>
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/calendar-clock.svg" alt="Icono de citas proximas">
                            <p class="card__text">Proxima cita</p>
                        </div>
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
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-plus.svg" alt="">
                            <p class="card__text">Nuevas citas</p>
                        </div>
                        <div class="card__table">
                            <table class="table">
                                <thead class="table__heading">
                                    <tr>
                                        <th class="table__col">Cliente</th>
                                        <th class="table__col">Servicio</th>
                                        <th class="table__col">Precio</th>
                                        <th class="table__col">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="table__body" id="tableBody">
                                    <tr class="table__row">
                                        <td class="table__cell">Raul Limon</td>
                                        <td class="table__cell">Facial</td>
                                        <td class="table__cell">$100</td>
                                        <td class="table__cell">
                                            <span class="badge">Pendiente</span>
                                        </td>
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