import React, { useState, useEffect, useRef } from 'react';


export const EditTodoForm = ({task, editTask}) => {
  const [newValue, setNewValue] = useState(task.task);
  const editRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (newValue.trim() === "") return; 
    editTask(newValue, task.id)
  };

  useEffect(() => {
    editRef.current.focus();
  }, []);

  return (
    <form className="flex items-center justify-center h-20 " onSubmit={handleSubmit}>
      <div className='inline-block'>
        
        <div className='flex text-white'>
         <input 
          type="text"    
          ref={editRef}
          className="text-white pr-4 pl-1 py-3 w-52 md:w-80 border-b border-white focus:outline-none focus:border-white"
          placeholder='Update Task'
          onChange={(e) => setNewValue(e.target.value)}
          value={newValue}
        />
          <button type='submit' className='px-4 border-2 rounded-lg ml-5 cursor-pointer'>Update</button>
        </div>
      </div>
    </form>
  );
};