export const ADD_TODO = "ADD_TODO";

export const postTodo = value => {
  return {
    type: ADD_TODO,
    payload: value
  }
}