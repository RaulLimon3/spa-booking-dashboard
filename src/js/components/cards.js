import { formatHour } from "../utils/helpers";

const statCard = ({ icon, text, value }) => {
    return `
        <div class="card">
            <div class="card__content">
                <div class="card__heading">
                    <img src="${icon}" alt="Icono de calendario">
                    <p class="card__text">${text}</p>
                </div>
                <span class="card__summary">${renderValue(value)}</span>
            </div>
        </div>
    `;
};

// Renderizamos nuestro valor dinamico
const renderValue = (value) => {
    let result = value ? value : '0';
    return result;
}

const appointmentCard = ({ id, name, service, date, hour }) => {
    return `
        <div class="card__information">
            <div class="card__data">
                <div class="card__username">
                    <p>${name}</p>
                    <p class="card__service">Servicio: <span class="card__service-name">${service}</span></p>
                </div>
                <div class="card__date-information">
                    <span class="card__date">${date}</span>
                    <span class="card__hour">${formatHour(hour)}</span>
                </div>
            </div>
            <div class="card__buttons">
                <button type="button" class="btn btn__danger btn-cancel-appointment" data-id="${id}">Cancelar</button>
                <button type="button" class="btn btn__success btn-complete-appointment" data-id="${id}">Completado</button>
            </div>
        </div>
    `;
}

const emptyCard = () => {
    return `
        <div class="card__information card__information--empty">
            <div class="card__data card__data--empty">
                <div class="card__message">
                    <p>No hay citas hoy</p>
                </div>
            </div>
        </div>
    `;
};

export { statCard, renderValue, appointmentCard, emptyCard };