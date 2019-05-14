import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import { loadState, saveState } from './localStorage';

import './index.css';
import App from './App';

const persistedState = loadState();
const store = createStore(
  reducer, 
  persistedState // override initital state with state from local storage
);

// Notify changes to store's state with the subscribe method which will be invoked whenever there is a state change
store.subscribe(() => {
  // pass the object with the todos field only from the state object
  saveState({
    todos: store.getState().todos
  });
});

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));


