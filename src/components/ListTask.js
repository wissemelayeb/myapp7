import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ListTask() {
  const tasks = useSelector(state => {
    if (state.filter === 'all') {
      return state.tasks;
    } else if (state.filter === 'done') {
      return state.tasks.filter(task => task.isDone);
    } else {
      return state.tasks.filter(task => !task.isDone);
    }
  });

  const dispatch = useDispatch();

  const handleToggle = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} onClick={() => handleToggle(task.id)}>
          <span
            style={{
              textDecoration: task.isDone ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.description}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
