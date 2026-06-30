import {  clientColumns } from "../components/columns";
import { table } from "../components/tables";
import { searchAppointments } from "../service/appointments";
let currentAppoitnments = [];
let defaultQuery = '';

const renderClientsTable = () => {
    const searchClient = searchAppointments(currentAppoitnments, defaultQuery);
    const clientTable = document.getElementById('clientsTable');
    if (!clientTable) return;
    clientTable.innerHTML = table({
        columns: clientColumns,
        data: searchClient
    });
};

const initClients = () => {
    const clientSearch = document.getElementById('clientSearch');

    if (!clientSearch) return;

    clientSearch.addEventListener('input', (e) => {
        defaultQuery = e.target.value;
        renderClientsTable();
    });
};

const renderClientes = (appointments) => {
    currentAppoitnments = appointments;
    return `
        <div class="dashboard" id="clients">
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <div class="card__heading-title">
                                <img src="./src/assets/icons/book-user.svg" alt="Icono de clientes">
                                <p class="card__text">Clientes</p>
                            </div>
                        </div>
                        <div class="card__panel-control">
                            <div class="searchbar">
                                <input type="text" name="search" id="clientSearch" class="input" placeholder="Buscar">
                            </div>
                        </div>
                        <div id="clientsTable">
                            ${table({
                                columns: clientColumns,
                                data: appointments
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export { initClients, renderClientes }