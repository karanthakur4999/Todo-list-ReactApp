////Todo list App project in React--

import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    //// console.log(event.target.value);
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("delete");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            className="alin"
            placeholder="Add a items"
            onChange={itemEvents}
            value={inputList}
          ></input>
          <button onClick={listOfItem}>+</button>
          <ul className="unorder_list">
            {/* <li>{inputList}</li> */}
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  key={index}
                  text={itemVal}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;
