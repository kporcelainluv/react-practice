import React, { useState, useEffect, useRef } from "react";
import nanoid from "nanoid";

import { markTask, deleteTask } from "./utils";

const Todo = ({ element, index, list, updateList }) => {
  const [state, setState] = useState({
    seconds: 0,
    isTimerActive: false
  });

  const intervalId = useRef(undefined);

  useEffect(() => {
    if (state.isTimerActive) {
      intervalId.current = setInterval(() => {
        setState(s => {
          return { ...s, seconds: s.seconds + 1 };
        });
      }, 1000);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = undefined;
    }
  }, [state.isTimerActive]);

  return (
    <section key={element.id} className="todo-block">
      <div className="todo-block__element">
        <input
          type="checkbox"
          defaultChecked={element.checked}
          onClick={() => {
            return updateList(markTask(list, index));
          }}
        />
        <span
          style={
            ({ marginRight: "30px" },
            element.checked ? { textDecoration: "line-through" } : undefined)
          }
        >
          {index + 1}) {element.text}
        </span>
      </div>
      <div className="todo-block__buttons">
        <span style={{ marginLeft: "10px" }}> {state.seconds} seconds </span>
        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setState(s => {
              return { ...s, isTimerActive: true };
            });
          }}
        >
          Start timer
        </button>

        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setState(s => {
              return { ...s, isTimerActive: false };
            });
          }}
        >
          Stop timer
        </button>
        <button
          className="todo-button"
          type="button"
          onClick={() => {
            if (intervalId.current) {
              clearInterval(intervalId.current);
            }
            return updateList(deleteTask(list, index));
          }}
        >
          Delete task
        </button>
      </div>
    </section>
  );
};

export const TodoTimer = () => {
  const [state, setState] = useState({
    input: "Change button color to pink",
    list: [{ id: 0, text: "Finish refactoring project", checked: false }]
  });

  const updateList = updatedList => {
    setState(s => {
      return { ...s, list: updatedList };
    });
  };

  return (
    <div className="container">
      <h2 className="title">To-do list with counter</h2>
      <ul style={{ margin: "auto" }}>
        <li>look at Simple To-do List</li>
        <li> every item has it's own timer</li>
        <li> activate this timer with start button</li>
        <li> deactivate this timer with stop button</li>
      </ul>
      <form
        style={{ margin: "50px auto" }}
        onSubmit={e => {
          e.preventDefault();
          setState(s => {
            return { ...s, input: "" };
          });
        }}
      >
        <div className="input-container">
          <input
            className="input"
            value={state.input}
            type="text"
            onChange={e => {
              const currentInput = e.target.value;
              setState(s => {
                return { ...s, input: currentInput };
              });
            }}
          />
          <button
            className="button"
            type="submit"
            onClick={() => {
              setState(s => {
                return {
                  ...s,
                  list: [
                    ...s.list,
                    { id: nanoid(), text: s.input, checked: false }
                  ]
                };
              });
            }}
          >
            Send
          </button>
        </div>
        <div>
          {state.list.map((element, index) => {
            return (
              <Todo
                key={element.id}
                element={element}
                index={index}
                list={state.list}
                updateList={updateList}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};
