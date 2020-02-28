import React, { useState, useEffect, useRef } from "react";
import nanoid from "nanoid";
import { TaskDescription } from "./TaskDescription";
import { Icon } from "./Icon";

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

const separateMinsAndSec = seconds => {
  if (seconds > 60) {
    return `${seconds / 60} minutes ${seconds - 60 * (seconds / 2)} seconds`;
  }
  return `${seconds} seconds`;
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
        <label htmlFor="" className="todo-block__text">
          <div style={{ display: "none" }}>
            <include src="./css/sprite.svg" />
          </div>
          <input
            type="checkbox"
            defaultChecked={element.checked}
            onClick={() => {
              return updateTasks(markTask(tasks, element.id));
            }}
          />
          <span style={element.checked ? { color: "grey" } : undefined}>
            {element.text}
          </span>
        </label>
        <div className="todo-block__buttons">
          <button
            className="button-svg"
            type="button"
            onClick={() => {
              setState(s => ({ ...s, isTimerActive: true }));
            }}
          >
            <Icon name={"start"} />
          </button>

          <button
            className="button-svg"
            type="button"
            onClick={() => {
              setState(s => ({ ...s, isTimerActive: false }));
            }}
          >
            <Icon name={"stop"} />
          </button>
          <button
            className="button-svg"
            type="button"
            onClick={() => {
              setState(s => ({ ...s, isTimerActive: false }));
              return updateTasks(deleteTask(tasks, element.id));
            }}
          >
            <Icon name={"delete"} />
          </button>
        </div>
      </div>

      <span className="todo-block__seconds">
        {" "}
        {separateMinsAndSec(state.seconds)}
      </span>
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
      <TaskDescription
        title={"To-do list with timer"}
        desc={[
          "look at Simple To-do List",
          "every item has it's own timer",
          "activate this timer with start button",
          "deactivate this timer with stop button"
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
            className="input"
            placeholder={state.input}
            value={state.input}
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
