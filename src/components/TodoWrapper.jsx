import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 }from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(savedTodos);
    }, []);

    

    const addTodo  = (todo) => {
      const newTodos =[...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false },];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }; 

    
    const toggleCompleted = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  return (
    <div className='p-10'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,) => 
        todo.isEditing ? (
          <EditTodoForm task={todo} editTask={editTask} />
        ) : (          
        <Todo task={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} /> 

                ))}
    </div>
  );
};
