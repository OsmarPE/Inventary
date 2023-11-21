import axios from 'axios'

export const products = axios.create({
    baseURL:'http://localhost:8000/inventario/api/inventario'
}) 
