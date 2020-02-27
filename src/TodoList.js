import React, { useReducer } from "react";
import nanoid from "nanoid";

const reducer = (state, action) => {
  const tasks = state.tasks;
  if (action.type === "delete") {
    const { id } = action.payload;
    return { ...state, tasks: tasks.filter(task => task.id !== id) };
  } else if (action.type === "mark") {
    const { id } = action.payload;
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });
    return { ...state, tasks: updatedTasks };
  } else if (action.type === "add") {
    return {
      ...state,
      tasks: [...tasks, { id: nanoid(), text: state.input, checked: false }]
    };
  } else if (action.type === "update") {
    const { input } = action.payload;
    return { ...state, input: input };
  }
};

const Tasks = ({ id, index, checked, text, deleteTask, markTask }) => {
  return (
    <li className="todo-list__element">
      <div className="task-wrap">
        <span className="task__element"> {index + 1}.</span>
        <input
          type="checkbox"
          className="todo-checkbox"
          defaultChecked={checked}
          onChange={() => markTask(id)}
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
        onClick={() => deleteTask(id)}
      >
        Delete
      </button>
    </li>
  );
};

const initialValue = {
  input: "change button color",
  tasks: [
    { id: nanoid(), text: "Make a to-do list in React.js", checked: true }
  ]
};

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const deleteTask = id => dispatch({ type: "delete", payload: { id } });
  const addTask = () => dispatch({ type: "add" });
  const markTask = id => dispatch({ type: "mark", payload: { id } });
  const updateInput = input => dispatch({ type: "update", payload: { input } });

  return (
    <div className="container">
      <h2 className="title">Simple to-do list</h2>
      <ul className="todo-list__list todo-list__list--shortened">
        <li>add item from input to the list of todos</li>
        <li>delete item from that list</li>
        <li> mark items as "done</li>
      </ul>
      <form
        className="todo-list__container"
        onSubmit={e => {
          e.preventDefault();
          addTask();
        }}
      >
        <div className="input-container">
          <input
            type="text"
            placeholder={state.input}
            value={state.input}
            className="input"
            onChange={e => {
              updateInput(e.target.value);
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
                key={task.id}
                text={task.text}
                index={index}
                checked={task.checked}
                id={task.id}
                deleteTask={deleteTask}
                markTask={markTask}
              />
            );
          })}
        </ul>
      </form>
    </div>
  );
};
