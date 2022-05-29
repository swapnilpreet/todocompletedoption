import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import CompletedTodo from "./CompletedTodo";

function Todo() {
  let [todos, setTodos] = useState([]);
  let [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (listtodo) => {
    setTodos([...todos, { value: listtodo, id: uuidv4() }]);
    // console.log(todos, listtodo);
  };
  const onDelete = (value) => {
    // console.log("value is getting", value);
    let d_todo = todos.filter((todo) => todo.value !== value);
    setTodos(d_todo);
    // console.log(d_todo);
  };
  const checkBoxHandler = (compVal) => {
    console.log("checkbox value", compVal);
    setCompletedTodos([...completedTodos, { value: compVal, id: uuidv4() }]);
    onDelete(compVal);
    //setCompletedTodos([...CompletedTodo], { value: compVal, id: uuidv4 });
    console.log(completedTodos);
  };

  const[state,setState] = useState(false);
  const chnageHnadlerstate=()=>{
    console.log("clicked");
    setState(true)
  }
  const chnageHnadler=()=>{
    setState(false)
  }
 console.log("sate",state);
  return (
    <div className="Todo">
      <h1>Todo Application</h1>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          checkBoxHandler={checkBoxHandler}
        />
      ))}
      {!state ? <CompletedTodo completedTodos={completedTodos} chnageHnadlerstate={chnageHnadlerstate}/>: <button onClick={chnageHnadler} > Show Completed Todo</button> }
      {/* <CompletedTodo completedTodos={completedTodos} chnageHnadlerstate={chnageHnadlerstate} /> */}
    </div>
  );
}

export default Todo;
