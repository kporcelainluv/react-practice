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
const addNewCounter = (list, index) => {
  return [...list, { id: Math.random(), value: 0 }];
};
const deleteCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1, list.length)];
};
export const AdvancedCounter = () => {
  const [listOfCounters, updateList] = useState([
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
          {listOfCounters.map((value, index) => {
            return (
              <div key={value.id}>
                <button
                  className="counter-button"
                  type="submit"
                  onClick={() => {
                    updateList(deleteCounter(listOfCounters, index));
                  }}
                >
                  Delete counter
                </button>
                <button
                  className="counter-button"
                  value="-"
                  onClick={() => {
                    updateList(decreaseNum(listOfCounters, index));
                  }}
                >
                  -
                </button>
                <span> {value.value}</span>
                <button
                  className="counter-button"
                  value="+"
                  onClick={() => {
                    updateList(increaseNum(listOfCounters, index));
                  }}
                >
                  {" "}
                  +{" "}
                </button>

                <button
                  className="counter-button"
                  type="button"
                  onClick={() => {
                    updateList(addNewCounter(listOfCounters, index));
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
