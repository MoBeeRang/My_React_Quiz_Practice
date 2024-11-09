import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      removeTodo: (state, action) => {
         //(주의)state전체를 바꿀때는 return으로 반환해도 적용이 된다. 단, state의 일부속성만 return하게 된다면 state 가 교체되어 이전 속성들이 날라가니 참고할 것
         //filter나 map을 사용할때 return;을 하지 않으면 그냥 값을 만들고 끝내게 되는것이라 변하는게 없게 된다.
         return state.filter((map) => map.id !== Number(action.payload))
      },
   },
})

export default todoSlice
export const { addTodo, removeTodo } = todoSlice.actions
