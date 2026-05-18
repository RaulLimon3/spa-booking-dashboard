export const table = ({ columns, data, emptyMessage = 'Sin datos disponibles' }) => {
    const header = tableHead(columns);
    const rows = data.length ? tableRow(data, columns) : emptyTable(columns, emptyMessage);
    return `
        <div class="card__table">
            <table class="table">
                    <thead class="table__heading">
                        <tr>
                            ${header}
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        ${rows}
                    </tbody>
            </table>
        </div>
    `;
};

const emptyTable = (columns, message) => {
    return `
        <tr>
            <td class="table__cell" colspan="${columns.length}">
                ${message}
            </td>
        </tr>
    `;
};

const tableHead = (columns) => {
    return columns.map(column => `
            <th class="table__col">
                ${column.header}
            </th>
        `).join('');
};

const tableRow = (data, columns) => {
    return data.map(item => `
        <tr class="table__row">
            ${columns.map(column => tableCell(column, item)).join('')}
        </tr>
    `).join('');
};

const tableCell = (column, item) => {
    const value = item[column.accessor];

    return `
        <td class="table__cell">
            ${column.render
                ? column.render(value, item)
                : value ?? '-'
            }
        </td>
    `;
};