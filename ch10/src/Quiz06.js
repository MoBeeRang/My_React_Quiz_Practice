import styled, { keyframes } from 'styled-components'

//스타일드 컴포넌트의 키프레임 사용
const move = keyframes`
   0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(150%);
  }
    
   100% {
    transform: translateX(0%);
  }
`

const Ball = styled.div`
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
   animation: ${move} 2s infinite;
`

function Quiz06() {
   return <Ball />
}

export default Quiz06
