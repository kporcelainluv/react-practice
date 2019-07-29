import React, { useState } from "react";
import styled from "styled-components";
import nanoid from "nanoid";

const Li = styled.li`
  text-align: left;
  list-style-type: none;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const toggleElement = (elements, index) => {
  return [
    ...elements.slice(elements, index),
    { ...elements[index], checked: !elements[index].checked },
    ...elements.slice(index + 1)
  ];
};

const deleteElements = (elements, index) => {
  return [...elements.slice(elements, index), ...elements.slice(index + 1)];
};

export const ToDo = () => {
  const [state, setState] = useState("Wash the dishes");
  // eslint-disable-next-line
  const [list, setList] = useState([]);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setList([...list, { id: nanoid(), text: state, checked: false }]);
          setState("");
        }}
      >
        <label htmlFor="todo">
          <input
            type="text"
            id="todo"
            value={state}
            onChange={e => {
              setState(e.target.value);
            }}
          />
        </label>
        <button type="submit">Enter</button>
        <Ul>
          {list.map((value, index) => {
            return (
              <Li key={value.id}>
                {index + 1}.
                <input
                  type="checkbox"
                  defaultChecked={value.checked}
                  onChange={() => setList(toggleElement(list, index))}
                />
                <span
                  style={
                    value.checked
                      ? { textDecoration: "line-through" }
                      : undefined
                  }
                >
                  {value.text}
                  <button
                    type="button"
                    onClick={() => {
                      setList(deleteElements(list, index));
                    }}
                  >
                    Delete
                  </button>
                </span>
              </Li>
            );
          })}
        </Ul>
      </form>
    </div>
  );
};
