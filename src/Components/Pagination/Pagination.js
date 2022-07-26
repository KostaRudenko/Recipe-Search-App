import './Pagination.css';

export default function Pagination({ recipesPerPage, totalRecipes, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) { pageNumbers.push(i); }

    return (
        <>
            {pageNumbers.length > 1 ? (
                <nav className="pagination">
                    <ul className="pagination__list">
                        {pageNumbers.map((number) => (
                            <li className={`pagination__item ${currentPage === number ? "current" : ""}`} key={number}>
                                <span onClick={() => paginate(number)}>{number}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            ) : ''}
        </>
    )
}