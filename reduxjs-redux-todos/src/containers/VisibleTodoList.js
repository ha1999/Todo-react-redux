import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions/todo'
import {VisibilityFilters} from '../actions/todo'

const getVisibleTodos = (state, filter) =>{
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return state
        case VisibilityFilters.SHOW_ACTIVE:
            return state.filter(todo => todo.completed === false)
        case VisibilityFilters.SHOW_COMPLETED:
            return state.filter(todo => todo.completed === true)
        default:
             return state
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.reduceTodo, state.filter)
})
const mapDispatchToProps = dispatch => ({
    onClick: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)