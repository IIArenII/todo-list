import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';

export const Todo = ({task, toggleCompleted}) => {
  
  return (
    <div className='flex justify-between items-center text-white bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-md mx-auto my-4'>
      <p onClick={() => toggleCompleted(task.id)} className={`text-lg cursor-pointer ${task.completed ? 'line-through text-green-500' : ''}`}>{task.task}</p>
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer hover:text-yellow-400" />
        <FontAwesomeIcon icon={faSquareCheck} className="cursor-pointer hover:text-green-400" />
      </div>
     
    </div>
  );
}
