import React from 'react';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo =>
        <li
          key={todo.id}
        >
          {todo.text}
        </li>,
       )}
    </ul>
  );
}
export default TodoList;
