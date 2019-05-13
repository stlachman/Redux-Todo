import React from 'react';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;