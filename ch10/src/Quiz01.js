import styled from 'styled-components'

//styled.input하면 text 기본형
//[중요]input.attrs사용하면 타입 설정가능
//styled.input.attrs({ type: 'text' })`는 styled.input` 와 같음.
const StyledInput = styled.input.attrs({ type: 'text' })`
   background-color: #93e6ff;
   height: 30px;
   width: 250px; // 여기에 코드 작성
`
const StyledInput2 = styled(StyledInput)`
   background-color: white;
` // 여기에 코드 작성

function Quiz01() {
   return (
      <div>
         <StyledInput></StyledInput>
         <StyledInput2></StyledInput2>
      </div>
   )
}

export default Quiz01
