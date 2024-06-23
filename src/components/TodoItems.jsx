import React from 'react';
import tick from '../assets/tick.png';
import notTick from '../assets/not_tick.png';
import deleteIcon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-6 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img
          onClick={() => toggle(id)}
          className='w-14'
          src={isComplete ? tick : notTick}
          alt={isComplete ? 'Completed' : 'Not Completed'}
        />
        <p className={`text-slate-700 ml-14 text-7xl ${isComplete ? 'line-through' : ''}`}>
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        className='w-16 mr-24 cursor-pointer'
        src={deleteIcon}
        alt='Delete'
      />
    </div>
  );
};

export default TodoItems;
