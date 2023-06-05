import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
