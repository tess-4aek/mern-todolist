import React from 'react';
import ToDoList from './components/TodoList.js';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.wrapper}>
      <ToDoList />
    </div>
  );
}

export default App;
