import React from 'react';
import styled from 'styled-components';

import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <Container>
      <TodoList />
      <TodoForm />
    </Container>
  );
}

export default App;
