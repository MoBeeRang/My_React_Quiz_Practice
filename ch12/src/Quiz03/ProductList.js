import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { addProduct, removeProduct } from './productSlice'
function ProductList() {
   const [inputValue, setInputValue] = useState('')
   const productList = useSelector((state) => state.product.productList)
   const dispatch = useDispatch()
   return (
      <div>
         <input
            type="text"
            placeholder="등록할 상품이름을 입력하세요"
            onChange={(e) => {
               setInputValue(e.target.value)
            }}
         ></input>
         <button
            onClick={() => {
               dispatch(addProduct(inputValue))
            }}
         >
            상품 추가
         </button>
         <ul>
            {productList &&
               productList.map((prod) => (
                  <li key={prod.id}>
                     {prod.text}
                     <button
                        onClick={() => {
                           dispatch(removeProduct(prod.id))
                        }}
                     >
                        상품 삭제
                     </button>
                  </li>
               ))}
         </ul>
      </div>
   )
}

export default ProductList
