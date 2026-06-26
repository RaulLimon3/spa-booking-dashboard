const pagination = (currentPage, itemsPerPage, totalItems) => {
    const firstResult = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const lastResult = Math.min(currentPage * itemsPerPage, totalItems);
    const { showPrev, showNext } = getPaginationState(currentPage, totalItems, itemsPerPage);
    return `
        <div class="pagination">
            <div class="pagination__results">
                ${paginationResult(firstResult, lastResult, totalItems)}
            </div>
            <div class="pagination__buttons">
                <button type="button" class="pagination__btn ${!showPrev ? 'pagination__btn--hidden' : ''}" id="paginationPrev">
                    <img src="./src/assets/icons/chevron-left.svg" alt="Icono de anterior" class="icon">
                </button>
                ${paginationPages(currentPage)}
                <button type="button" class="pagination__btn ${!showNext ? 'pagination__btn--hidden' : ''}" id="paginationNext">
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

const initPagination = ({ onNext, onPrev }) => {
    const pagination = document.querySelector('.pagination');
    pagination?.addEventListener('click', (e) => {
        const nextBtn = e.target.closest('#paginationNext');
        const prevBtn = e.target.closest('#paginationPrev');
        if (nextBtn) {
            onNext?.();
        }
        if (prevBtn) {
            onPrev?.();
        }
    })
};

const getPaginationState = (currentPage, totalResults, itemsPerPage) => {
    const totalPages = Math.ceil(totalResults / itemsPerPage);
    return {
        showPrev: currentPage > 1,
        showNext: currentPage < totalPages,
        totalPages
    };
};

export { pagination, initPagination };