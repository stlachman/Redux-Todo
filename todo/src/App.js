import React from 'react';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
