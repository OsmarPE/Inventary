import 'remixicon/fonts/remixicon.css'
import './App.css'
import Table from './Components/Table'
import TableItem from './Components/TableItem'
import { useEffect, useState } from 'react'
import { setProduct, supabase, updateProduct } from './supabase/db'
import Loading from './Components/Loading'
import { datesProducts } from './utils/helper'
import Pagination from './Components/Pagination'


function App() {

  const [productos, setProductos] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [id, setid] = useState(null)
  const [titleModal, settitleModal] = useState('')
  const [loading, setLoading] = useState(false)
  const [pag, setPag] = useState(0)
  const [productoObj, setproductoObj] = useState({
    id:'',
    producto: '',
    cantidad: '',
    fecha: '',
    precio: '',
    faltantes: '',
    minimo: '',
    ventas: '',
    mensaje: '',
  })

  useEffect(() => {


    const getData = async () => {
      setLoading(true)
      let { data: productos } = await supabase.from('productos').select('*')
      console.log(productos);
      setProductos(productos);
      setLoading(false)
    }

    getData()

  }, [showModal,id])

  function handleChange(e) {
    setproductoObj({
      ...productoObj,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { cantidad, faltantes, fecha, mensaje, minimo, precio, producto, ventas } = productoObj

    if ([cantidad, faltantes, fecha, mensaje, minimo, precio, producto, ventas].includes('')) return
    
    if (titleModal === 'Añadir Producto') {
      const { data } = await setProduct(productoObj)
  
      console.log(data);
      
    }else{
      const { data } = await updateProduct(productoObj?.id,productoObj)
      console.log(data);
      setid(productoObj?.id)
      
    }

    closeModal()

  }


  function showModalCurrent(title) {
      settitleModal(title)
      setShowModal(!showModal)
  }

  function editProduct(product) {
      setproductoObj(product);
      showModalCurrent('Editar Producto')
      console.log(product);
  }

  function closeModal() {
    setShowModal(false)
    setproductoObj({
      producto: '',
      cantidad: '',
      fecha: '',
      precio: '',
      faltantes: '',
      minimo: '',
      ventas: '',
      mensaje: '',
    })
  }


  return (
    <>
      
      <main className='main'>

        <header className='header'>
          <h1 className="header__title"> STOCK <span className="header__title--bold">IA</span> </h1>
          <button className="header__btn btn" onClick={() => showModalCurrent('Añadir Producto')}> <i className="ri-add-line"></i>Añadir</button>
        </header>

        {
          !loading ? (

            <Table>
              {
                productos.slice(6 * pag,6 * (pag + 1)).map(producto => <TableItem editProduct={editProduct} setid={setid} product={producto} key={producto.id} />)
              }

            </Table>

          ) : <Loading/>
        }

        {productos.length > 0 && <Pagination length={Math.ceil(productos.length / 6) } pag={pag} setPag={setPag}/> }
      </main>
      {showModal && (
        <div className="modal">
          <div className="modal__card">
            <div className="modal__heading">
              <h2>{titleModal}</h2>
              <button onClick={() => closeModal()}><i className="ri-close-line"></i></button>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className="form__body">
                <div className="form__item">
                    <label htmlFor="producto">producto</label>
                   <input type="text" value={productoObj.producto}  onChange={handleChange} name='producto' id='producto' placeholder='Ingrese un producto' />
                </div>
                <div className="form__item">
                    <label htmlFor="cantidad">cantidad</label>
                  <input type="text" value={productoObj.cantidad}  onChange={handleChange} name='cantidad' id='cantidad' placeholder='Ingrese un cantidad' />

                </div>
                <div className="form__item">
                    <label htmlFor="fecha">fecha</label>
                    <select className='form__input' name="fecha" id="fecha" value={productoObj.fecha} onChange={handleChange}>
                      <option value="">Fecha</option>
                      {
                        datesProducts.map(item => <option key={item.date} value={item.date}>{item.product}</option>)
                      }
                    </select>
                  {/* <input type="text" value={productoObj.fecha}  onChange={handleChange} name='fecha' id='fecha' placeholder='Ingrese un fecha' /> */}

                </div>
                <div className="form__item">
                    <label htmlFor="precio">precio</label>
                  <input type="text" value={productoObj.precio}  onChange={handleChange} name='precio' id='precio' placeholder='Ingrese un precio' />

                </div>
                <div className="form__item">
                    <label htmlFor="faltantes">faltantes</label>
                  <input type="text" value={productoObj.faltantes}  onChange={handleChange} name='faltantes' id='faltantes' placeholder='Ingrese un faltantes' />
                </div>
                <div className="form__item">
                    <label htmlFor="minimo">minimo</label>
                  <input type="text" value={productoObj.minimo}  onChange={handleChange} name='minimo' id='minimo' placeholder='Ingrese un minimo' />

                </div>
                <div className="form__item">
                    <label htmlFor="ventas">ventas</label>
                  <input type="text" value={productoObj.ventas}  onChange={handleChange} name='ventas' id='ventas' placeholder='Ingrese un ventas' />

                </div>
                <div className="form__item">
                    <label htmlFor="mensaje">mensaje</label>
                  <input type="text" value={productoObj.mensaje}  onChange={handleChange} name='mensaje' id='mensaje' placeholder='Ingrese un mensaje' />

                </div>
              </div>
              <div className="form__actions">
                <button className='form__cancel' onClick={() => closeModal()}>Cancel</button>
                <input type="submit" value={titleModal === 'Añadir Producto' ? 'Añadir' : 'Editar'} className='form__submit btn' />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default App
