const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   const newState = { ...state } //현재 state의 값만 복사해서 저장
   switch (action.type) {
      case 'increment':
         newState.count++
         return newState
      case 'decrement':
         newState.count--
         return newState
      default:
         return state
   }
}

export default counterReducer
