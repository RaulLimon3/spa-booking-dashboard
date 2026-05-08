export const renderServicios = () => {
    return `
        <div class="dashboard" id="services">
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/settings-2.svg" alt="Icono de servicios">
                            <p class="card__text">Servicios</p>
                        </div>
                        <div class="card__table">
                            <table class="table">
                                <thead class="table__heading">
                                    <tr>
                                        <th class="table__col">Nombre</th>
                                        <th class="table__col">Duración</th>
                                        <th class="table__col">Precio</th>
                                        <th class="table__col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="table__body" id="servicesTableBody">
                                    <tr class="table__row">
                                        <td class="table__cell">Facial</td>
                                        <td class="table__cell">60 min</td>
                                        <td class="table__cell">$1,000.00</td>
                                        <td class="table__cell">...</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td class="table__cell">Masaje</td>
                                        <td class="table__cell">90 min</td>
                                        <td class="table__cell">$2,000.00</td>
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