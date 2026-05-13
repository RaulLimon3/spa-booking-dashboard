const statCard = ({ icon, text, value }) => {
    return `
        <div class="card">
            <div class="card__content">
                <div class="card__heading">
                    <img src="${icon}" alt="Icono de calendario">
                    <p class="card__text">${text}</p>
                </div>
                <span class="card__summary">${value}</span>
            </div>
        </div>
    `;
};

// Renderizamos nuestro valor dinamico
const renderValue = (value) => {
    let result = value ? value : '0';
    return result;
}

export { statCard, renderValue };