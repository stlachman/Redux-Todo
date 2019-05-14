export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Action creator - functions that create actions
export const addTodo = value => {
  return {
    type: ADD_TODO,
    payload: value
  }
}

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index
  }
}

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  }
}