import React from "react";
import { useState } from "react";
import "../App.css";
function TodoInput({ addTodo }) {
  let [value, setValue] = useState("");
  return (
    <div id="container_todo_input">
      <div>
        <input
          className="input_todo"
          type="text"
          value={value}
          placeholder="Add a To-do..."
          onChange={(e) => {
            setValue(e.target.value);
            // console.log(e.target.value)
          }}
        />
      </div>
      <div>
        <button
          id="todo_add"
          disabled={!value}
          onClick={() => {
            addTodo(value);
           setValue("");
          }}
        >
          <svg
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="4"
              d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
