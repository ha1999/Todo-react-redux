import {combineReducers} from 'redux'
import reduceTodo from './todos'
import VisibilityFilteTodo from './visibilityFilteTodo'
const rootReducer = combineReducers({
    reduceTodo,
    VisibilityFilteTodo
})

export default rootReducer