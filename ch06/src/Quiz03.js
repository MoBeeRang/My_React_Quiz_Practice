import React, { useState } from 'react'
import useCounter from './useCounter'

const Quiz03 = () => {
   //비구조화 할당 될때 객체{}인지 배열[]인지 꼭 확인하고 커스텀 훅을 만들도록 하자.
   const { count, increment, decrement, reset } = useCounter(0, 1)
   return (
      <div>
         <p>현재 숫자: {count}</p>
         <button onClick={increment}>1씩 증가</button>
         <button onClick={decrement}>1씩 감소</button>
         <button onClick={reset}>초기화</button>
      </div>
   )
}

export default Quiz03
