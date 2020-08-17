import React from 'react'
import propTypes from 'prop-types'
 const Todo = ({text, onClick, completed}) =>(
     <li 
        onClick = {onClick}
        style = {{
            textDecoration: completed ? 'line-through': 'none'
        }}
        >
            {text}
     </li>
 )
Todo.propTypes =({
    text: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired
})

export default Todo
