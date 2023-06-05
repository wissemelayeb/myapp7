import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
