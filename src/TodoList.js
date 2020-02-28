import React, { useReducer } from "react";
import nanoid from "nanoid";
import { TaskDescription } from "./TaskDescription";

const TYPE = {
  delete: "delete"
};

const reducer = (state, action) => {
  const tasks = state.tasks;

  if (action.type === TYPE.delete) {
    const { id } = action.payload;
    return { ...state, tasks: tasks.filter(task => task.id !== id) };
  } else if (action.type === "mark") {
    const { id } = action.payload;
    return {
      ...state,
      tasks: tasks.map(task => {
        if (task.id === id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      })
    };
  } else if (action.type === "add") {
    return {
      ...state,
      input: "",
      tasks: [...tasks, { id: nanoid(), text: state.input, checked: false }]
    };
  } else if (action.type === "update") {
    const { input } = action.payload;
    return { ...state, input: input };
  }
};

const Task = ({ index, task, deleteTask, markTask }) => {
  const { id, checked, text } = task;
  return (
    <li className="todo-list__element">
      <div className="task-wrap">
        <span className="task__element">{index + 1}.</span>
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
  input: "",
  tasks: [
    { id: nanoid(), text: "Make a to-do list in React.js", checked: true }
  ]
};

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const deleteTask = id => dispatch({ type: TYPE.delete, payload: { id } });
  const addTask = () => dispatch({ type: "add" });
  const markTask = id => dispatch({ type: "mark", payload: { id } });
  const updateInput = input => dispatch({ type: "update", payload: { input } });

  return (
    <div className="container">
      <TaskDescription
        title={"Simple to-do list"}
        desc={[
          "add item from input to the list of todos",
          "delete item from that list",
          'mark items as "done'
        ]}
      />
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
            placeholder="Your todo"
            value={state.input}
            className="input"
            onChange={e => updateInput(e.target.value)}
          />
          <button className="black-button" type="submit">
            Enter
          </button>
        </div>

        <ol className="todo-list">
          {state.tasks.map((task, index) => {
            return (
              <Task
                key={task.id}
                index={index}
                task={task}
                deleteTask={deleteTask}
                markTask={markTask}
              />
            );
          })}
        </ol>
      </form>
    </div>
  );
};
