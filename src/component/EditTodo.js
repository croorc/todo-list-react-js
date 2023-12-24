import React, { useState } from 'react'

export const EditTodo = ({ editingTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handelSubmit = (e) => {
        e.preventDefault()
        editingTodo(value, task.id)
        setValue('')

    }
    return (
        <form className='TodoFrom' onSubmit={handelSubmit}>
            <input id='inputTask' type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
