import { currencyFormat, formatHour, statusBadge } from "../utils/helpers";
import { dropdown } from "./dropdown";

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
        render: (_, item) => currencyFormat(item.servicio.precio)
    },
    {
        header: 'Status',
        accessor: 'estado',
        render: (value) => `
            ${statusBadge(value)}
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
        accessor: 'estado',
        render: (value) => `${statusBadge(value)}`
    },
    {
        header: 'Acciones',
        accessor: 'id',
        render: (value) => dropdown(value)
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

const servicesColumns = [
    {
        header: 'Nombre',
        accessor: 'nombre',
        render: (_, item) => item.nombre
    },
    {
        header: 'Duración',
        accessor: 'duracion',
        render: (_, item) => `${item.duracion} min`
    },
    {
        header: 'Precio',
        accessor: 'precio',
        render: (_, item) => currencyFormat(item.precio)
    }
]

export { dashboardColumns, appointmenteColumns, clientColumns, servicesColumns };