import React, { useState, useCallback } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = useCallback((event) => {
      setText(event.target.value)
   },[])

   const handleSubmit = useCallback((event) => {//items와 text가 바뀔때 그 값으로 함수가 세팅됨, 만약 []로 시작시에만 생성된다면 빈값으로밖에 실행되지 않는다.
      event.preventDefault()
      setItems([...items, text])
      setText('')
   },[items,text])

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">추가</button>
         </form>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz02_1
