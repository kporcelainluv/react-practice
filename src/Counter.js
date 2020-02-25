import React, { useState } from "react";

const Counter = () => {
  const [number, updateNumber] = useState(0);

  const inc = () => updateNumber(number + 1);
  const dec = () => updateNumber(number >= 0 ? number - 1 : 0);

  return (
    <div className="container">
      <h2 className="title">Add simple counter</h2>
      <div className="counter-container">
        <button className="button" onClick={inc}>
          +
        </button>
        <span className="counter-number">{number}</span>
        <button className="button" onClick={dec}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
