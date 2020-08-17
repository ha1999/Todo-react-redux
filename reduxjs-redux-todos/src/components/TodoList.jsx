import React from 'react'
import propTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) =>(
    <ul>
        {
            todos.map(todo =>
                <Todo key = {todo.id} {...todo} onClick = {()=> toggleTodo(todo.id)}/>
            )
        }
    </ul>
)

TodoList.propTypes = ({
    todos: propTypes.array.isRequired,
    toggleTodo: propTypes.func.isRequired
})

export default TodoList