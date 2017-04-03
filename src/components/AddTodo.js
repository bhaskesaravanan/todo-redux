import React from 'react';

// function addItem() {
//   const text = taskInput.value;
//   console.log(text);
//   this.props.onAddClick(text);
//   this.taskInput.value = '';
// }

function AddTodo(props) {
  let taskInput;
  return (<div className="todoListMain">
    <div className="header">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (taskInput.value !== '') {
            props.onAddClick(taskInput.value.trim());
            taskInput.value = '';
          }
        }}
      >
        <input ref={(el) => { taskInput = el; }} type="text" placeholder="enter task" />
        <button type="submit">add</button>
      </form>
    </div>
  </div>);
}


export default AddTodo;
