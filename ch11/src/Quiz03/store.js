import { createStore } from 'redux'
import todoReducer from './todoReducer'
// 여기에 코드 구현

const store = createStore(todoReducer)

export default store
