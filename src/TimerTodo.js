import React, { useState, useEffect, useRef } from "react";

const deleteTask = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1, list.length)];
};

const toggleChecked = (list, index) => {
  return [
    ...list.slice(0, index),
    { ...list[index], checked: !list[index].checked },
    ...list.slice(index + 1, list.length)
  ];
};

const ToDo = ({ element, index, handleToggleCompletion, handleDelete }) => {
  const [seconds, setSeconds] = useState(0);
  const [isTimerActive, setTimerActive] = useState(false);
  const intervalId = useRef(undefined);

  useEffect(() => {
    if (isTimerActive) {
      intervalId.current = setInterval(() => {
        setSeconds(x => x + 1);
      }, 1000);
      console.log("timer should be active");
    } else {
      clearInterval(intervalId.current);
      intervalId.current = undefined;
      console.log("timer should NOT be active");
    }
  }, [isTimerActive]);

  return (
    <div key={element.id} className="todo-block">
      <div className="todo-block__element">
        <input
          type="checkbox"
          defaultChecked={element.checked}
          onClick={handleToggleCompletion}
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
        <span style={{ marginLeft: "10px" }}> {seconds} seconds </span>
        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setTimerActive(true);
          }}
        >
          Start timer
        </button>

        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setTimerActive(false);
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
            handleDelete();
          }}
        >
          Delete task
        </button>
      </div>
    </div>
  );
};

export const TodoTimer = props => {
  const [inputText, updateText] = useState("Change button color to pink");
  const [state, updateState] = useState([
    { id: 0, text: "Finish refactoring project", checked: false }
  ]);

  return (
    <div className="container">
      <h2 className="title">To-do list with counter</h2>
      <ul style={{ margin: "auto" }}>
        <li>look at Simple Todo List</li>
        <li> every item has it's own timer</li>
        <li> activate this timer with start button</li>
        <li> deactivate this timer with stop button</li>
      </ul>
      <form
        style={{ margin: "50px auto" }}
        onSubmit={e => {
          e.preventDefault();
          updateText("");
        }}
      >
        <div className="input-container">
          <input
            className="input"
            value={inputText}
            type="text"
            onChange={e => {
              updateText(e.target.value);
            }}
          />
          <button
            className="button"
            type="submit"
            onClick={() => {
              updateState([
                ...state,
                { id: Math.random(), text: inputText, checked: false }
              ]);
            }}
          >
            Send
          </button>
        </div>
        <div>
          {state.map((element, index) => {
            const handleToggleCompletion = () => {
              updateState(toggleChecked(state, index));
            };

            const handleDelete = () => {
              updateState(deleteTask(state, index));
            };

            return (
              <ToDo
                key={element.id}
                element={element}
                index={index}
                handleDelete={handleDelete}
                handleToggleCompletion={handleToggleCompletion}
              ></ToDo>
            );
          })}
        </div>
      </form>
    </div>
  );
};
