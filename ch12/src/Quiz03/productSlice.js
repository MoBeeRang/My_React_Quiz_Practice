import { createSlice } from '@reduxjs/toolkit'
import ProductList from './ProductList'

const productSlice = createSlice({
   name: 'product',
   initialState: [],
   reducers: {
      addProduct: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      removeProduct: (state, action) => {
         return state.filter((proc) => proc.id !== action.payload)
      },
   },
})
export default productSlice
export const { addProduct, removeProduct } = productSlice.actions
