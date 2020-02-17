import React, { useState } from "react";

const Counter = () => {
  const [number, updateNumber] = useState(0);
  return (
    <div className="container">
      <h2 className="title">Add simple counter</h2>
      <div style={{ margin: "auto" }}>
        <button
          className="counter-button"
          onClick={() => {
            return updateNumber(number + 1);
          }}
        >
          +
        </button>
        {number}
        <button
          className="counter-button"
          onClick={() => {
            return updateNumber(number >= 0 ? number - 1 : 0);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
