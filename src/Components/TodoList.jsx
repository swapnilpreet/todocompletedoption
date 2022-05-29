import React from "react";
import TodoListComponent from "./TodoListComponent";

function TodoList({ todo, onDelete,checkBoxHandler }) {
//  console.log("list todo", todo);
  return (
    <div>
      <TodoListComponent  todo={todo.value} onDelete={onDelete} checkBoxHandler={checkBoxHandler}/>
    </div>
  );
}

export default TodoList;
