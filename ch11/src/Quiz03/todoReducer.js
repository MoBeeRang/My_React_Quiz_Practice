// 여기에 코드 구현
const initialState = { todos: [] }
function todoReducer(state = initialState, action) {
   switch (action.type) {
      case 'addTodo':
         return { todos: [...state.todos, { id: action.id, text: action.text }] }
      case 'removeTodo':
         return { todos: state.todos.filter((map) => map.id != action.id) }
      default:
         return state
   }
}

export default todoReducer
