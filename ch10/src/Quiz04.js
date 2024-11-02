import styled from 'styled-components'

/*
const Box = styled.div`
   margin: 10px;
   background-color: lightgray;
   width: ${(props) => {
      if (props.size == 'small') return '100px'
      else if (props.size == 'medium') return '200px'
      else if (props.size == 'large') return '300px'
   }};
   height: ${(props) => {
      if (props.size == 'small') return '100px'
      else if (props.size == 'medium') return '200px'
      else if (props.size == 'large') return '300px'
   }};
`
*/

const Box = styled.div`
   margin: 10px;
   background-color: lightgray;
   width: ${(props) => (props.size == 'small' ? '100px' : props.size == 'medium' ? '200px' : '300px')};
   height: ${(props) => (props.size == 'small' ? '100px' : props.size == 'medium' ? '200px' : '300px')};
`

function Quiz04() {
   return (
      <div>
         <Box size="small">Small Box</Box>
         <Box size="medium">Medium Box</Box>
         <Box size="large">Large Box</Box>
      </div>
   )
}

export default Quiz04
