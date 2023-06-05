import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim()) {
      // Dispatch an action to update the task
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <span
            style={{
              textDecoration: task.isDone ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={handleToggleEditing}
          >
            {description}
          </span>
          <button onClick={handleToggleEditing}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Task;
