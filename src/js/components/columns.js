import { formatHour } from "../utils/helpers";

const dashboardColumns = [
    {
        header: 'Cliente',
        accessor: 'cliente'
    },
    {
        header: 'Servicio',
        accessor: 'servicio',
        render: (_, item) => item.servicio.nombre
    },
    {
        header: 'Precio',
        accessor: 'precio',
        render: (_, item) => `$${item.servicio.precio.toLocaleString('en-US', {minimumFractionDigits: 2})}`
    },
    {
        header: 'Status',
        accessor: 'estado',
        render: (value) => `
            <span class="badge">${value}</span>
        `
    }
];

const appointmenteColumns = [
    {
        header: 'Cliente',
        accessor: 'cliente'
    },
    {
        header: 'Servicio',
        accessor: 'servicio',
        render: (_, item) => item.servicio.nombre
    },
    {
        header: 'Fecha',
        accessor: 'fecha'
    },
    {
        header: 'Hora',
        accessor: 'hora',
        render: (_, item) => formatHour(item.hora)
    },
    {
        header: 'Status',
        accessor: 'estado'
    },
    {
        header: 'Acciones',
    }
];

const clientColumns = [
    {
        header: 'Nombre',
        accessor: 'cliente'
    },
    {
        header: 'Telefono',
        accessor: 'telefono'
    }
];

export { dashboardColumns, appointmenteColumns, clientColumns };