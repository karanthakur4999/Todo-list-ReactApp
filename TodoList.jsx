import React from "react";
const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          class="fa-sharp fa-solid fa-x"
          id="x_icon"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li className="list">{props.text}</li>
      </div>
    </>
  );
};
export default TodoList;
