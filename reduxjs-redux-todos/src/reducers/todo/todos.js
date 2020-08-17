 const reduceTodo = (state = [], action)=>{
        switch(action.type){
            case 'ADD_TODO':
                return [
                     ... state,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }
                ]

            case 'TOGGLE_TODO':
                return 
                state.map(todo => action.payload.id === todo.id ? {...todo, completed:!todo.completed} : todo )

            case 'REMOVE_TODO':
                return 
                state.filter(todo => todo.id !== action.payload.id)

            default:
                return state
        }
}
export default reduceTodo;