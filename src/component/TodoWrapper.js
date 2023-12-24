import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodo } from './EditTodo';
uuidv4();

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])


    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, complete: false, isEditing: false }])
        // console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get things done!</h1>
            <TodoForm addTodo={addTodo} />

            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodo editingTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}


        </div>
    )
}
