import React from 'react'
import {VisibilityFilters} from '../actions/todo'
import FilterLink from '../containers/FilterLink'
const Footer = () =>(
    <div>
        <span> Select show: </span>
        <FilterLink filter = {VisibilityFilters.SHOW_ALL}/>
        <FilterLink filter = {VisibilityFilters.SHOW_ACTIVE}/>
        <FilterLink filter = {VisibilityFilters.SHOW_COMPLETED}/>
    </div>
)
export default Footer