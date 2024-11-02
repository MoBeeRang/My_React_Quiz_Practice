import styled from 'styled-components'

const Button = styled.button`
   padding: 10px 18px;
   border: 0;
   background-color: ${(props) => (props.color ? props.color : 'gray')};
   color: white;
   border-radius: 4px;
`

function Quiz02() {
   return (
      <div>
         <Button color="blue">Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02
