
// eslint-disable-next-line react/prop-types
function Table({children}) {

    return (
        <div className="table">
            <div className="table__thead">
                <p className='table__thead-title'>PRODUCTO</p>
                <p className='table__thead-title'>CANTIDAD</p>
                <p className='table__thead-title'>FECHA</p>
                <p className='table__thead-title'>PRECIO</p>
                <p className='table__thead-title'> PRODUCTOS RESTANTES</p>
                <p className='table__thead-title'>MINIMO </p>
                <p className='table__thead-title'>VENTAS </p>
                {/* <p className='table__thead-title'>MENSAJE</p> */}
                <p className='table__thead-title'>ACTIONS</p>
            </div>
            {children}
        </div>
    )
}

export default Table