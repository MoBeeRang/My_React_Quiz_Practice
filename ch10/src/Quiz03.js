import styled from 'styled-components'

const Card = styled.div`
   padding: 19px;
   border: 2px solid black;

   &:hover {
      border-color: red;
   }
`

function Quiz03() {
   return <Card>Hover me!</Card>
}
export default Quiz03
