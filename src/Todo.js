import React, { useState } from "react";
import nanoid from "nanoid";
import "./css/style.css";

const toggleElement = (elements, index) => {
  return [
    ...elements.slice(elements, index),
    { ...elements[index], checked: !elements[index].checked },
    ...elements.slice(index + 1)
  ];
};

const deleteElements = (elements, index) => {
  return [...elements.slice(elements, index), ...elements.slice(index + 1)];
};

export const ToDo = () => {
  const [state, setState] = useState("Make a to-do list in React.js");
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <h2 className="title">Simple to-do list</h2>
      <ul style={{ margin: "auto", marginBottom: "30px" }}>
        <li>add item from input to the list of todos</li>
        <li>delete item from that list</li>
        <li> mark items as "done</li>
      </ul>
      <form
        style={{ margin: "auto" }}
        onSubmit={e => {
          e.preventDefault();
          setList([...list, { id: nanoid(), text: state, checked: false }]);
          setState("");
        }}
      >
        <label htmlFor="todo">
          <input
            type="text"
            id="todo"
            value={state}
            className="input"
            onChange={e => {
              setState(e.target.value);
            }}
          />
        </label>
        <button className="button" type="submit">
          Enter
        </button>
        <ul className="todo-list">
          {list.map((value, index) => {
            return (
              <li key={value.id} className="todo-list__element">
                <div className="element-wrap">
                  <span style={{ marginRight: "10px" }}> {index + 1})</span>
                  <input
                    type="checkbox"
                    className="todo-checkbox"
                    defaultChecked={value.checked}
                    onChange={() => setList(toggleElement(list, index))}
                  />
                  <span
                    style={
                      value.checked
                        ? { textDecoration: "line-through" }
                        : undefined
                    }
                  >
                    {value.text}
                  </span>
                </div>
                <button
                  className="todo-delete"
                  type="button"
                  onClick={() => {
                    setList(deleteElements(list, index));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
