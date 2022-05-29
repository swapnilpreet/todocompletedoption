import React, { useState } from "react";
import CompletedTodoList from "./CompletedTodoList";
import styles from "./todos.module.css";
function CompletedTodo({ completedTodos,chnageHnadlerstate }) {
  // console.log(completedTodos);
  
  return (
    <div>
      <button className={styles.btn_info} onClick={chnageHnadlerstate} > Show Completed Todo</button>
      {completedTodos.map((todo) => (
        <CompletedTodoList todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default CompletedTodo;
