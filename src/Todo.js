import React, { useState } from "react";
import nanoid from "nanoid";

import { markTask, deleteTask } from "./utils";

export const ToDo = () => {
  const [state, setState] = useState({
    input: "cook dinner",
    list: [
      { id: nanoid(), text: "Make a to-do list in React.js", checked: true }
    ]
  });

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
          setState(s => {
            return {
              list: [
                ...s.list,
                { id: nanoid(), text: s.input, checked: false }
              ],
              input: ""
            };
          });
        }}
      >
        <label htmlFor="todo">
          <input
            type="text"
            id="todo"
            value={state.input}
            className="input"
            onChange={e => {
              const currentInput = e.target.value;
              setState(s => {
                return {
                  ...s,
                  input: currentInput
                };
              });
            }}
          />
        </label>
        <button className="button" type="submit">
          Enter
        </button>
        <ul className="todo-list">
          {state.list.map((element, index) => {
            return (
              <li key={element.id} className="todo-list__element">
                <div className="element-wrap">
                  <span style={{ marginRight: "10px" }}> {index + 1})</span>
                  <input
                    type="checkbox"
                    className="todo-checkbox"
                    defaultChecked={element.checked}
                    onChange={() =>
                      setState(s => {
                        return { ...s, list: markTask(s.list, index) };
                      })
                    }
                  />
                  <span
                    style={
                      element.checked
                        ? { textDecoration: "line-through" }
                        : undefined
                    }
                  >
                    {element.text}
                  </span>
                </div>
                <button
                  className="todo-delete"
                  type="button"
                  onClick={() => {
                    setState(s => {
                      return { ...s, list: deleteTask(s.list, index) };
                    });
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
