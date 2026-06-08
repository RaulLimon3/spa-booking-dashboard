const pagination = (currentPage, itemsPerPage, totalItems) => {
    const firstResult = (currentPage - 1) * itemsPerPage + 1;
    const lastResult = Math.min(currentPage * itemsPerPage, totalItems);
    const totalPage = Math.ceil(totalItems / itemsPerPage);
    return `
        <div class="pagination">
            <div class="pagination__results">
                ${paginationResult(firstResult, lastResult, totalItems)}
            </div>
            <div class="pagination__buttons">
                <button type="button" class="pagination__btn pagination__btn--hidden" id="paginationPrev">
                    <img src="./src/assets/icons/chevron-left.svg" alt="Icono de anterior" class="icon">
                </button>
                ${paginationPages(currentPage)}
                <button type="button" class="pagination__btn" id="paginationNext">
                    <img src="./src/assets/icons/chevron-right.svg" alt="Icono de anterior" class="icon">
                </button>
            </div>
        </div>
    `;
};

const paginationResult = (firstResult, lastResult, totalResults) => {
    return `
        <p class="pagination__info">Resultados: 
            <span class="pagination__result">${firstResult} - ${lastResult}</span> de 
            <span class="pagination__result">${totalResults}</span>
        </p>
    `;
};

const paginationPages = (page) => {
    return `<span class="pagination__page">${page}</span>`
};

const initPagination = () => {
    const pagination = document.querySelector('.pagination');
    pagination?.addEventListener('click', (e) => {
        const nextBtn = e.target.closest('#paginationNext');
        if (nextBtn) {
            console.log('Siguiente pagina');
        }
    })
};

export { pagination, initPagination };