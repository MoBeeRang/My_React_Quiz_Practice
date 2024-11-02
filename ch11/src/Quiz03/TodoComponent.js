import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'

// 여기에 코드 구현
function TodoComponent() {
   const [nextId, setNextId] = useState(1)
   const [inputValue, setInputValue] = useState('')
   const dispatch = useDispatch()
   const todos = useSelector((state) => state.todos)
   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button
            onClick={() => {
               dispatch({ type: 'add', id: nextId, text: inputValue })
               setNextId(nextId + 1)
               setInputValue('')
            }}
         >
            추가
         </button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text}{' '}
                  <button
                     onClick={() => {
                        dispatch({ type: 'remove', id: todo.id })
                     }}
                  >
                     삭제
                  </button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoComponent
