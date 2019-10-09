import React from 'react';
import TaskIcon from './img/tasks.png'
import CompleteIcon from './img/completetasks.png'
import DeleteIcon from './img/deletetasks.png'
import {NavStyle} from '../styling/navstyling'

const Nav =() => {
    return (
        <NavStyle>
            <nav>
                <a href = "/tasks"><img src={TaskIcon} alt= "task icon"/></a>
                <a href = "/completedtasks"><img src={CompleteIcon} alt= "Completed Task icon"/></a>
                <a href = "/deletedtasks"><img src={DeleteIcon} alt= "Delete Task icon"/></a>
            </nav>
        </NavStyle>
    )
}
export default Nav;