import React, { useState } from "react";

const increaseNum = (list, index) => {
  return [
    ...list.slice(0, index),
    { ...list[index], value: list[index].value + 1 },
    ...list.slice(index + 1)
  ];
};
const decreaseNum = (list, index) => {
  return [
    ...list.slice(0, index),
    { ...list[index], value: list[index].value - 1 },
    ...list.slice(index + 1)
  ];
};
const addNewCounter = list => {
  return [...list, { id: Math.random(), value: 0 }];
};
const deleteCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1, list.length)];
};
export const AdvancedCounter = () => {
  const [counters, updateCounters] = useState([
    {
      id: 0,
      value: 0
    }
  ]);
  return (
    <div className="container">
      <h2 className="title">Advanced counter</h2>
      <ul style={{ margin: "auto", paddingLeft: "85px" }}>
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
              <div key={value.id}>
                <button
                  className="counter-button"
                  type="submit"
                  onClick={() => {
                    updateCounters(deleteCounter(counters, index));
                  }}
                >
                  Delete counter
                </button>
                <button
                  className="counter-button"
                  value="-"
                  onClick={() => {
                    updateCounters(decreaseNum(counters, index));
                  }}
                >
                  -
                </button>
                <span> {value.value}</span>
                <button
                  className="counter-button"
                  value="+"
                  onClick={() => {
                    updateCounters(increaseNum(counters, index));
                  }}
                >
                  {" "}
                  +{" "}
                </button>

                <button
                  className="counter-button"
                  type="button"
                  onClick={() => {
                    updateCounters(addNewCounter(counters, index));
                  }}
                >
                  Add new counter
                </button>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};
