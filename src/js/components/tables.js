export const table = ({ columns, data, emptyMessage = 'Sin datos disponibles' }) => {
    const header = columns.map(column => `
            <th class="table__col">
                ${column.header}
            </th>
        `).join('');
    
        const rows = data.length ? 
            data.map(item => `
                <tr class="table__row">
                    ${columns.map(column => {
                        const value = item[column.accessor];
                        return `
                            <td class="table__cell">
                                ${column.render
                                    ? column.render(value, item)
                                    : value ?? '-'
                                }
                            </td>
                        `;
                    }).join('')}
                </tr>
                `).join('')
            : `
                <tr>
                    <td class="table__cell" colspan="${columns.length}">
                        ${emptyMessage}
                    </td>
                </tr>
            `;
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