export const renderClientes = () => {
    return `
        <div class="dashboard" id="dashboard">
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/book-user.svg" alt="Icono de clientes">
                            <p class="card__text">Clientes</p>
                        </div>
                        <div class="card__panel-control">
                            <div class="searchbar">
                                <input type="text" name="search" id="appointmentsSearch" class="input" placeholder="Buscar">
                            </div>
                        </div>
                        <div class="card__table">
                            <table class="table">
                                <thead class="table__heading">
                                    <tr>
                                        <th class="table__col">Nombre</th>
                                        <th class="table__col">Telefono</th>
                                        <th class="table__col">N. de citas</th>
                                        <th class="table__col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="table__body" id="tableBody">
                                    <tr class="table__row">
                                        <td class="table__cell">Raul Limon</td>
                                        <td class="table__cell">1234567890</td>
                                        <td class="table__cell">5</td>
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