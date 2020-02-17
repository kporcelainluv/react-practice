import React, { useState } from "react";

const Counter = () => {
  const [number, updateNumber] = useState(0);
  return (
    <div>
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
  );
};

export default Counter;
