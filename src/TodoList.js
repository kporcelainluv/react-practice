import React, { useState } from "react";
import nanoid from "nanoid";

const markTask = (tasks, id) => {
  return tasks.map(task => {
    if (task.id === id) {
      task.checked = !task.checked;
    }
    return task;
  });
};

const deleteTask = (tasks, id) => {
  return tasks.filter(task => task.id !== id);
};

// TODO: can I actually pass setState as props
const Tasks = ({ id, checked, text, index, setState }) => {
  return (
    <li key={id} className="todo-list__element">
      <div className="task-wrap">
        <span className="task__element"> {index + 1}.</span>
        <input
          type="checkbox"
          className="todo-checkbox"
          defaultChecked={checked}
          onChange={() =>
            setState(s => ({ ...s, tasks: markTask(s.tasks, id) }))
          }
        />
        <span
          className="task__element"
          style={checked ? { textDecoration: "line-through" } : undefined}
        >
          {text}
        </span>
      </div>
      <button
        className="black-button"
        type="button"
        onClick={() => {
          setState(s => ({ ...s, tasks: deleteTask(s.tasks, id) }));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export const TodoList = () => {
  const [state, setState] = useState({
    input: "change button color",
    tasks: [
      { id: nanoid(), text: "Make a to-do list in React.js", checked: true }
    ]
  });

  const onFormSubmit = () => {
    setState(s => ({
      tasks: [...s.tasks, { id: nanoid(), text: s.input, checked: false }],
      input: ""
    }));
  };

  const updateCurrentInput = input => {
    setState(s => ({
      ...s,
      input: input
    }));
  };
  return (
    <div className="container">
      <h2 className="title">Simple to-do list</h2>
      <ul className="todo-list__list">
        <li>add item from input to the list of todos</li>
        <li>delete item from that list</li>
        <li> mark items as "done</li>
      </ul>
      <form
        className="container--centered"
        onSubmit={e => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <div className="input-container">
          <input
            type="text"
            placeholder={state.input}
            className="input"
            onChange={e => {
              updateCurrentInput(e.target.value);
            }}
          />

          <button className="black-button" type="submit">
            Enter
          </button>
        </div>

        <ul className="todo-list">
          {state.tasks.map((task, index) => {
            return (
              <Tasks
                text={task.text}
                index={index}
                checked={task.checked}
                id={task.id}
                setState={setState}
              />
            );
          })}
        </ul>
      </form>
    </div>
  );
};
