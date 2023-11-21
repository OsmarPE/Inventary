import { deleteProduct } from '../supabase/db.js'
// eslint-disable-next-line react/prop-types, no-unused-vars
function Actions({ id, setid, editProduct, product,setActions }) {

  async function removeProduct(currentId) {
    await deleteProduct(currentId)
    setid(Math.random() * Number(currentId))
  }



  return (
    <div className="actions">
      <button className="actions__btn" onClick={() => {
        setActions(preveState => !preveState)
        removeProduct(id)
        
      }}>Eliminar</button>
      <button className="actions__btn" onClick={() =>{
         setActions(preveState => !preveState)
         editProduct(product)
      }}>Editar</button>
    </div>
  )
}

export default Actions