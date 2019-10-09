import React, { useState, useReducer } from "react";
import { todo, reducer } from "../reducers/reducers";
import {TaskStyle} from '../styling/taskstyling'

const Todo = () => {
    //useReducer 
  const [state, dispatch] = useReducer(reducer, todo);
    //useState
  const [newTask, setNewTask] = useState("");
    //handleChanges
  const handleChanges = e => {
    setNewTask(e.target.value);
  };
//return
  return (
      <TaskStyle>
    <div className="tasks-list">
      <div className="container">
        <h1>Tasks to do</h1>

        {state.map(state => {
          return (
            <div className = {`item${state.completed ? " completed" : ""}`}
              onClick={() => {
                dispatch({ type: 'TOGGLE_COMPLETED', payload: state.id });
              }}
            >
            <div className="colored">
               <p className="invisible">here</p>
                </div>
              <p>{state.item}</p>
            </div>
          );
        })}

        {/*INPUT*/}
        <input
          className="input"
          type="text"
          name="newTask"
          value={newTask}
          onChange={handleChanges}
          placeholder= 'Add task here...'
        />

        {/* ADD TASK*/}
        <button
          className="btnitem"
          onClick={() => {
            dispatch({ type: "ADD_TASK", payload: newTask });
          }}
        >
          Add Task
        </button>

        {/* CLEAR COMPLETED*/}
        <button
          className="btnitem"
          onClick={() => {
            dispatch({ type: "CLEAR_COMPLETED" });
          }}
        >
          Clear Completed
        </button>
      </div>
      </div>
    </TaskStyle>
  );
};

export default Todo;