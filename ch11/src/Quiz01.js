import React, { useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
function reducer(state, action) {
   switch (action.type) {
      case 'add':
         return [...state, { id: action.id, text: action.text }]
      case 'delete':
         return state.filter((map) => map.id != action.id)
      default:
         return state
   }
}

const Quiz01 = () => {
   const [todos, dispatch] = useReducer(reducer, initialState)
   const [nextId, setNextId] = useState(1)
   const [inputValue, setInputValue] = useState('')

   // 새로운 할 일 추가
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'add', text: inputValue, id: nextId })
         setInputValue('')
         setNextId(nextId + 1)
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      //여기에 코드 작성
      dispatch({ type: 'delete', id: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz01
