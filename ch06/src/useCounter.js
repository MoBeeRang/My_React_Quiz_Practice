import { useState, useEffect } from 'react'
//들어오는 매개변수 0, 1
function useCounter(initialValue, step) {
   const [count, setCount] = useState(initialValue)
   console.log('iscount')
   console.log(count)
   useEffect(() => setCount(0), [])
   const increment = () => {
      console.log('increment')
      setCount(count + step)
   }
   const decrement = () => {
      console.log('decrement')
      setCount(count - step)
   }
   const reset = () => {
      console.log('reset')
      setCount(initialValue)
      //   setCount(0) 를 써도 되는데 초기값은 initialValue 랑 같다고 한다. 불변하는가보다.
   }

   //배열이 아닌, 객체로 받는걸 확인했어야 함. ㅠㅠ 이거때매 실행이 안됬었음
   return { count, increment, decrement, reset }
}

export default useCounter
