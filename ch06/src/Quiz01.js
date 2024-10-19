import React, { useState, useEffect } from 'react'

const Quiz01 = () => {
   const [seconds, setSeconds] = useState(0)
   const [isRunning, setIsRunning] = useState(false)

   useEffect(() => {
      let timerId
      if (isRunning) {
         timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
         }, 1000)
      }
      return () => {
         //이름이 뒷정리 함수인데, 실상은 앞정리 함수아닌가? 굉장히 헷갈리는 용어인것 같다.
         //그냥 cleanup 함수라고 생각하는게.. ㅠ
         //이게 먼저 실행되고 isRunning에 따라 setInterval이 실행된다.
         //setInterval을 중지시키는 역할을 한다.
         //매개변수를 찾을 수 없으면 아무런 일도 일어나지 않는다.
         //timerId는 전체 함수 생성될때(실행될때) 코드진행에 따라 설정되는 듯 하다.(나중에 자세히 알아볼것)=> 아니었음. 직전에 넣었던 변수 id가 들어가고 실제 존재하기때문에 먼저 실행되도 변수에 해당하는 전역 interval을 찾을 수 있는 것임. (전역이라 timerId가 지역변수라도 가져올 수 있나봉가)
         clearInterval(timerId)
      }
   }, [isRunning])

   const startTimer = () => {
      setIsRunning(true)
      //여기에 코드 작성
   }

   const stopTimer = () => {
      setIsRunning(false)
      //여기에 코드 작성
   }

   return (
      <div>
         <p>타이머: {seconds} 초</p>
         <button onClick={startTimer} disabled={isRunning}>
            시작
         </button>
         <button onClick={stopTimer} disabled={!isRunning}>
            정지
         </button>
      </div>
   )
}

export default Quiz01
