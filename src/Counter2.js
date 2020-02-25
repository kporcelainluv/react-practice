import React, { useState } from "react";

const increase = (list, index) => {
  return list.map((elm, i) => {
    if (i === index) return { ...elm, value: elm.value + 1 };
    else return elm;
  });
};
const decrease = (list, index) => {
  return list.map((elm, i) => {
    if (i === index) return { ...elm, value: elm.value - 1 };
    else return elm;
  });
};
const addCounter = list => {
  return [...list, { id: Math.random(), value: 0 }];
};
const deleteCounter = (list, counterIndex) => {
  return list.filter((elm, index) => index !== counterIndex);
};

export const AdvancedCounter = () => {
  // TODO: use reducer
  const [counters, updateCounters] = useState([
    {
      id: 0,
      value: 0
    }
  ]);

  return (
    <div className="container">
      <h2 className="title">Advanced counter</h2>
      <ul className="advanced-counter__list">
        <li>several counters at once</li>
        <li>add counter with 0 value by default</li>
        <li>remove specific counter</li>
      </ul>
      <div style={{ margin: "50px auto" }}>
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
                    onClick={() => {
                      updateCounters(deleteCounter(counters, index));
                    }}
                  >
                    Delete counter
                  </button>
                  <button
                    className="button"
                    value="-"
                    onClick={() => {
                      updateCounters(decrease(counters, index));
                    }}
                  >
                    -
                  </button>
                </div>
                <span className="counter-number"> {value.value}</span>
                <div className="advanced-counter__buttons">
                  <button
                    className="button"
                    value="+"
                    onClick={() => {
                      updateCounters(increase(counters, index));
                    }}
                  >
                    +
                  </button>

                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      updateCounters(addCounter(counters, index));
                    }}
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
