import React, { useState } from 'react'
import { TodoForm } from './todoForm'
import { v4 as uuidv4 }from 'uuid';
import { Todo } from './Todo';


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo  = (todo) => {
        setTodos([
          ...todos, 
          { id: uuidv4(), task: todo, completed: true, isEditing: false },
         
    ]);
    }; 

    const toggleCompleted = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

  return (
    <div>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} toggleCompleted={toggleCompleted} />
        ))}
    </div>
  );
};
