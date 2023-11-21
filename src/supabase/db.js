import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


export async function setProduct(product) {
    const { producto, cantidad, fecha, precio, faltantes, minimo, ventas, mensaje } = product
    const { data } = await supabase
        .from('productos')
        .insert([{ producto, cantidad, fecha, precio, faltantes, minimo, ventas, mensaje }])
        .select()
    return { data }
}
export async function deleteProduct(id) {
    const { error } = await supabase.from('productos').delete().eq('id', id)
    return error
}
export async function updateProduct(id,product) {
    const { producto, cantidad, fecha, precio, faltantes, minimo, ventas, mensaje } = product
    const { data, error } = await supabase.from('productos').update({  producto, cantidad, fecha, precio, faltantes, minimo, ventas, mensaje }).eq('id', id).select()
    return { data, error }
}