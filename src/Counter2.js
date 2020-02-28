import React, { useReducer } from "react";
import nanoid from "nanoid";
import { TaskDescription } from "./TaskDescription";

const reducer = (counters, action) => {
  const type = action.type;
  if (type === "increment") {
    const { id } = action.payload;
    return counters.map(elm => {
      if (elm.id === id) return { ...elm, value: elm.value + 1 };
      else return elm;
    });
  } else if (type === "decrement") {
    const { id } = action.payload;
    return counters.map(elm => {
      if (elm.id === id)
        return { ...elm, value: elm.value > 0 ? elm.value - 1 : 0 };
      else return elm;
    });
  } else if (type === "deleteCounter") {
    const { id } = action.payload;
    return counters.filter(elm => elm.id !== id);
  } else if (type === "addCounter") {
    return [...counters, { id: nanoid(), value: 0 }];
  }
  return counters;
};

const initialValue = [
  {
    id: nanoid(),
    value: 0
  }
];

export const AdvancedCounter = () => {
  const [counters, dispatch] = useReducer(reducer, initialValue);

  const increment = id => dispatch({ type: "increment", payload: { id } });
  const decrement = id => dispatch({ type: "decrement", payload: { id } });
  const deleteCounter = id =>
    dispatch({ type: "deleteCounter", payload: { id } });
  const addCounter = () => dispatch({ type: "addCounter", payload: {} });

  return (
    <div className="container">
      <TaskDescription
        title="Advanced counter"
        desc={[
          "several counters at once",
          "add counter with 0 value by default",
          "remove specific counter"
        ]}
      />
      {/*<h2 className="title">Advanced counter</h2>*/}
      {/*<ul className="advanced-counter__list">*/}
      {/*  <li>several counters at once</li>*/}
      {/*  <li>add counter with 0 value by default</li>*/}
      {/*  <li>remove specific counter</li>*/}
      {/*</ul>*/}
      <div className="advanced-counter__container">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {counters.map((value, index) => {
            return (
              <div
                key={value.id}
                className="advanced-counter__buttons-container"
              >
                <div>
                  <button
                    className="button"
                    type="submit"
                    onClick={() => deleteCounter(value.id)}
                  >
                    Delete counter
                  </button>
                  <button
                    className="button"
                    value="-"
                    onClick={() => decrement(value.id)}
                  >
                    -
                  </button>
                </div>
                <span className="counter-number"> {value.value}</span>
                <div className="advanced-counter__buttons">
                  <button
                    className="button"
                    value="+"
                    onClick={() => increment(value.id)}
                  >
                    +
                  </button>

                  <button
                    className="button"
                    type="button"
                    onClick={() => addCounter()}
                  >
                    Add counter
                  </button>
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};
