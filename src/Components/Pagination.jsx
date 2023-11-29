
// eslint-disable-next-line react/prop-types
function Pagination({ length, pag, setPag }) {
    return (
        <div className="pagination">
            {
                Array.from({ length }, (_, i) => i).map(num => (
                    <button onClick={() => setPag(num)} className={pag === num ? 'pagination__btn active' : 'pagination__btn'} key={num}>{num + 1}</button>

                ))
            }
        </div>
    )
}

export default Pagination