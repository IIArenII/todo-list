import React, { useState, useRef, useEffect } from 'react';


export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === "") return; 
    addTodo(value);
    setValue(""); 
    inputRef.current.focus();
  };

    const inputRef = useRef(null); 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="flex items-center justify-center h-60 " onSubmit={handleSubmit}>
      <div className='inline-block'>
        <h1 className='text-5xl text-white py-10 w-full flex text-center justify-center'>To do list</h1>
        <div className='flex text-white'>
         <input 
          type="text"  
          ref={inputRef}  
          className="text-white pr-4 pl-1 py-3 w-52 md:w-80 border-b border-white focus:outline-none focus:border-white"
          placeholder='What is the task of today'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
          <button type='submit' className='px-4 border-2 rounded-lg ml-5 cursor-pointer'>Add</button>
        </div>
      </div>
    </form>
  );
};