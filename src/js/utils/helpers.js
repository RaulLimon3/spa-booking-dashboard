const formatHour = (hour) => {
    const [hours, minutes] = hour.split(':');
    const parseHour = Number(hours);
    const period = parseHour >= 12 ? 'p.m' : 'a.m';
    const formattedHour = parseHour % 12 || 12;
    return `${formattedHour}:${minutes} ${period}`;
}

const statusBadge = (status) => {
    const statusMap = {
        atendida: 'success',
        pendiente: 'warning',
        cancelada: 'error'
    };

    return `
        <span class="badge badge--${statusMap[status]}">${status}</span>
    `;
}

const currencyFormat = (price) => {
    return price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}

export { formatHour, statusBadge, currencyFormat };