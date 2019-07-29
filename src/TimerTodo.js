import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  margin: 20px auto;
`;

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

  console.log("render");

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
    <div key={element.id}>
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
        {index + 1}.{element.text}
      </span>
      <button
        type="button"
        onClick={() => {
          setTimerActive(true);
        }}
      >
        Start timer
      </button>
      <span> {seconds} </span>
      <button
        type="button"
        onClick={() => {
          setTimerActive(false);
        }}
      >
        Stop timer
      </button>
      <button
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
  );
};

export const TodoTimer = props => {
  const [inputText, updateText] = useState("");
  const [state, updateState] = useState([
    { id: 0, text: "ksusha", checked: false }
  ]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateText("");
        }}
      >
        <input
          value={inputText}
          type="text"
          onChange={e => {
            updateText(e.target.value);
          }}
        />
        <button
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

        <Wrap>
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
        </Wrap>
      </form>
    </div>
  );
};
