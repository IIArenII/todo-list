import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const Todo = ({task, toggleCompleted, deleteTodo, editTodo}) => {
  
  return (
    <div className='flex justify-between items-center text-white bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-md mx-auto my-4'>
      <p onClick={() => toggleCompleted(task.id)} className={`text-lg cursor-pointer ${task.completed ? 'line-through text-green-700' : ''}`}>{task.task}</p>
      <div className="flex space-x-4">
        <FontAwesomeIcon onClick={() => editTodo(task.id)} icon={faPenToSquare} className="cursor-pointer hover:text-yellow-400" />
        <FontAwesomeIcon onClick={() => deleteTodo(task.id)} icon={faTrashCan} className="cursor-pointer hover:text-green-400" />
      </div>
     
    </div>
  );
}
