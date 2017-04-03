import React from 'react';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo =>
        <li
          key={todo.id}
        ><a
          href="" onClick={(e) => {
            e.preventDefault();
            props.onDELETEClick(todo.id);
          }
       }>
          {todo.text}
        </a> </li>,
       )}
    </ul>
  );
}

export default TodoList;
