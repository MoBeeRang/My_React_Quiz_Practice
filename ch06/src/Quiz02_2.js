import React, { useMemo } from 'react'

const Quiz02_1 = (props) => {
   //numbers: list
   const { numbers } = props

   // filter, reduce 사용하여 홀수만 필터링하고 그 합계를 계산한 후 useMemo로 처리합니다.
   //reduce((acc,cur)=>{return 하고싶은거}) reduce는 하나의 값을 반환하도록 한다. acc는 이전 return값, cur은 현재 배열에서 가져온 값이다. 콜백함수 다음에 0을 추가하면 0번 인덱스부터 cur로 가져온다. 난 이게 편해서 0을 붙임, 안붙이면 0번인덱스 값이 최초 acc값으로 되고, 최초 cur은 1번 인텍스 값으로 들어가게 된다.
   const oddSum = numbers.reduce((acc, cur) => {
      console.log("acc: "+acc)
      console.log("cur: " + cur)
      if (cur%2 == 1) {
         return acc + cur
      }
      return acc
   },0)

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계:{ oddSum}</p>
      </div>
   )

   // return (
   //    <div>
   //       <p>주어진 숫자 배열: {numbers.join(', ')}</p>
   //       <p>홀수의 합계: {(/* 여기에 결과를 출력하세요 */)}</p>
   //    </div>
   // )
}

export default Quiz02_1
