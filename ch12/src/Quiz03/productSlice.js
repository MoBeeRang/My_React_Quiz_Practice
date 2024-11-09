import { createSlice } from '@reduxjs/toolkit'
import ProductList from './ProductList'

const productSlice = createSlice({
   name: 'product',
   initialState: { productList: [] },
   reducers: {
      addProduct: (state, action) => {
         state.productList.push({ id: Date.now(), text: action.payload })
      },
      removeProduct: (state, action) => {
         state.productList = state.productList.filter((proc) => proc.id !== action.payload)
      },
   },
})
export default productSlice
export const { addProduct, removeProduct } = productSlice.actions
