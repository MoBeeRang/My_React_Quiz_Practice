// 여기에 코드 구현
function todoReducer(state = { todos: [] }, action) {
   switch (action.type) {
      case 'add':
         const newTodos = [...state, { id: action.id, text: action.value }]
         return newTodos
      case 'remove':
         return state.filter((map) => map.id != action.id)
      default:
         return
   }
}

export default todoReducer
