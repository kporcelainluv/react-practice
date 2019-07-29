import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
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
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        {listOfCounters.map((value, index) => {
          return (
            <div key={value.id}>
              <button
                type="submit"
                onClick={() => {
                  updateList(deleteCounter(listOfCounters, index));
                }}
              >
                Delete counter
              </button>
              <Button
                value="-"
                onClick={() => {
                  updateList(decreaseNum(listOfCounters, index));
                }}
              >
                -
              </Button>
              <span> {value.value}</span>
              <Button
                value="+"
                onClick={() => {
                  updateList(increaseNum(listOfCounters, index));
                }}
              >
                {" "}
                +{" "}
              </Button>

              <button
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
  );
};
