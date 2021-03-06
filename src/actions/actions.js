export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: Date.now(),
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    key: id,
  };
}
