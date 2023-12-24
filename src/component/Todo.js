import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';


export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p onClick={() => { toggleComplete(task.id) }} className={`${task.complete} ? 'complete' : ''`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faSquarePen} onClick={() => { editTodo(task.id) }} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
