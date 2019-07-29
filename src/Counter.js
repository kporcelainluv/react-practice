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

const Counter = () => {
  const [number, updateNumber] = useState(0);
  return (
    <div>
      <Button
        onClick={() => {
          return updateNumber(number + 1);
        }}
      >
        +
      </Button>
      {number}
      <Button
        onClick={() => {
          return updateNumber(number >= 0 ? number - 1 : 0);
        }}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
