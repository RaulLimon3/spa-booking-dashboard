import { currencyFormat, formatHour, statusBadge } from "../utils/helpers";

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
        render: (value) => `
        <div class="dropdown">
            <button type="button" class="dropdown__toggle">⋯</button>
            <div class="dropdown__options dropdown--hidden">
                <button type="button" class="dropdown__item dropdown__item--edit" data-edit="${value}">Editar</button>
                <button type="button" class="dropdown__item dropdown__item--remove" data-remove="${value}">Eliminar</button>
            </div>
        </div>
        `
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