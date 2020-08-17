let initIdTodo = 0
//add new todo to todolist
export const addTodo = text =>({
    type: 'ADD_TODO',
    payload:{
        id: initIdTodo++,
        text
    }
})
//remove a todo from todolist
export const removeTodo = id =>({
    type: 'REMOVE_TODO',
    payload:{
        id
    }
})

//toggle todos
export const toggleTodo = id =>({
    type: "TOGGLE_TODO",
    payload: {
        id
    }
})

// setVisibilityFilte todos in todolist
export const  setVisibilityFilter = filter =>({
    type: 'SET_VISIBILITYFILTE',
    payload: {
        filter
    }
})

// all VisibilityFilters todolists
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }
  
