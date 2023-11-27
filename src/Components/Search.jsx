import { useState } from "react"
import { datesProducts, formatDate } from "../utils/helper"
import Table from "./Table"
import { getProduct } from "../supabase/db"
import TableItem from "./TableItem"
import { Toaster, toast } from "sonner"
function Search() {

    const [date, setDate] = useState('')
    const [productos, setproductos] = useState([])

    const text = productos.length > 1 ? 'Pproductos disponibles' : 'producto disponible'


    async function hanledSubmit(e) {
        e.preventDefault()

        if (!date) return

        const data = await getProduct(date)
        data.length > 0 && data.forEach(item => {
            const {cantidad,ventas, minimo, producto} = item
            const productsRest = (cantidad - ventas)
            const isMinimo = productsRest <= minimo
            if (isMinimo) {
                toast.info(`Llenar inventario de ${producto}, el minimo es ${minimo} unidades`)
            }
        } )

        setproductos(data);
    }
    


    return (
        <div className="main">
            <Toaster position="bottom-right" richColors  duration={5000} expand={true} />
            <form className="search" onSubmit={hanledSubmit}>
                <div className="search__item">

                    <select name="searchDate" id="searchDate" value={date} onChange={(e) => setDate(e.target.value)}>
                        <option value="">Fecha</option>
                        {
                            datesProducts.map((item, index) => <option key={index} value={item.date}>{item.product}</option>)
                        }
                    </select>
                    <input type="submit" className="btn" value="Buscar" />
                </div>
            </form>

            <div className="search__text">
                {productos.length > 0 && <p> Hay <span>{productos.length}</span> {text} para la Fecha <span>{formatDate(date)}</span>  </p>}
                {productos.length === 0 && date && <p>No hay productos para estas fechas</p>}
            </div>

            {
                productos.length > 0 && (

                    <Table>
                        {
                            productos.map(producto => <TableItem product={producto} key={producto.id} showActions={false}/>)
                        }
                    </Table>

                )
            }
        </div>
    )
}

export default Search