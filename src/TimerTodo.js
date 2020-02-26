import React, { useState, useEffect, useRef } from "react";
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

const Task = ({ element, index, tasks, updateTasks }) => {
  const [state, setState] = useState({
    seconds: 0,
    isTimerActive: false
  });

  const intervalId = useRef(undefined);

  useEffect(() => {
    if (state.isTimerActive) {
      intervalId.current = setInterval(() => {
        setState(s => ({ ...s, seconds: s.seconds + 1 }));
      }, 1000);
    }
    return () => {
      clearInterval(intervalId.current);
      intervalId.current = undefined;
    };
  }, [state.isTimerActive]);

  return (
    <section key={element.id} className="todo-block">
      <div className="todo-block__element">
        <input
          type="checkbox"
          defaultChecked={element.checked}
          onClick={() => {
            return updateTasks(markTask(tasks, element.id));
          }}
        />
        <span
          style={
            element.checked ? { textDecoration: "line-through" } : undefined
          }
        >
          {index + 1}. {element.text}
        </span>
      </div>
      <div className="todo-block__buttons">
        <span> {state.seconds} seconds </span>
        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setState(s => ({ ...s, isTimerActive: true }));
          }}
        >
          Start timer
        </button>

        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setState(s => ({ ...s, isTimerActive: false }));
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
            return updateTasks(deleteTask(tasks, element.id));
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
    tasks: [{ id: 0, text: "Finish refactoring project", checked: false }]
  });

  const updateTasks = updatedList => {
    setState(s => {
      return { ...s, tasks: updatedList };
    });
  };

  const updateInput = input => {
    setState(s => ({ ...s, input: input }));
  };

  const addTask = () => {
    setState(s => ({
      ...s,
      tasks: [...s.tasks, { id: nanoid(), text: s.input, checked: false }]
    }));
  };

  return (
    <div className="container">
      <h2 className="title">To-do list with counter</h2>
      <ul className="container--centered">
        <li>look at Simple To-do List</li>
        <li> every item has it's own timer</li>
        <li> activate this timer with start button</li>
        <li> deactivate this timer with stop button</li>
      </ul>
      <form
        className="counter-container"
        onSubmit={e => {
          e.preventDefault();
          addTask();
        }}
      >
        <div className="input-container">
          <input
            className="input"
            placeholder={state.input}
            type="text"
            onChange={e => {
              updateInput(e.target.value);
            }}
          />
          <button className="button" type="submit">
            Send
          </button>
        </div>
        <div>
          {state.tasks.map((element, index) => {
            return (
              <Task
                key={element.id}
                element={element}
                index={index}
                tasks={state.tasks}
                updateTasks={updateTasks}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};
