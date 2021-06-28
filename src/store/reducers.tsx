import { combineReducers } from 'redux'
import todo from '../store/todo/reducer'

const todoApp = combineReducers({
    todo,
})

export default todoApp