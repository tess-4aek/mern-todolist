import React from 'react';
import ToDoList from './components/TodoList.js';

const App = () => {
  return (
    <div style={{display: 'flex', width: window.innerWidth, height: window.innerHeight, justifyContent: 'center', alignItems: 'center'}}>
      <ToDoList />
    </div>
  );
}

export default App;
