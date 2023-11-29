/* eslint-disable react/prop-types */

import { useState } from "react"
import Actions from "./Actions"

// eslint-disable-next-line react/prop-types
function TableItem({product,setid,editProduct,showActions = true}) {

    const [actions, setActions] = useState(false)

    const {id,cantidad,fecha,mensaje,precio,producto, ventas, minimo} = product
    
    const productsRest = (cantidad - ventas)
    const isMinimo = productsRest <= minimo

    return (
        <div className="table__tbody">
            <p className='table__tbody--item'>{producto}</p>
            <p className='table__tbody--item'>{cantidad}</p>
            <p className='table__tbody--item'>{fecha}</p>
            <p className='table__tbody--item'>${precio}</p>
            <p className='table__tbody--item'>{productsRest}</p>
            <p className={isMinimo ? 'table__tbody--item error':'table__tbody--item'}>{minimo}</p>
            <p className='table__tbody--item'>{ventas}</p>
            {/* <p className='table__tbody--item'>{mensaje}</p> */}
            <div className='table__tbody--item table__tbody--actions'>
            
               { showActions && <button><i className="ri-more-2-fill" onClick={() => setActions( prevState => !prevState)}></i></button>}
                { actions && <Actions id={id} setActions={setActions} setid={setid} editProduct={editProduct} product={product} />}
            </div>
        </div>
    )
}

export default TableItem