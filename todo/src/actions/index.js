export const ADD_TODO = "ADD_TODO";

export const postTodo = item => {
  return {
    type: ADD_TODO,
    payload: item
  }
}