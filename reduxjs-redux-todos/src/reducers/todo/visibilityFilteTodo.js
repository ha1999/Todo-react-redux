import {VisibilityFilters} from '../../actions/todo'
const VisibilityFilteTodo = (state = VisibilityFilters.SHOW_ALL, action) =>{
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.payload.filter
        default: 
        return state
    }
}
export default VisibilityFilteTodo