import React from "react";
import Counter from "./Counter";
import { LocalDate } from "./CurrentTime";
import { ToDo } from "./Todo";
import { AdvancedCounter } from "./Counter2";
import { TodoTimer } from "./TimerTodo";
import { Gify } from "./Gify";
import { Age } from "./Age";
import styled from "styled-components";

const Wrap = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #6d7b8d;
`;

export const App = () => {
  return (
    <Wrap>
      <Title></Title>
      <Wrap>
        <Heading>Try to update the number</Heading>
        <Counter />
      </Wrap>
      <Wrap>
        <Heading>The current time is:</Heading>
        <LocalDate />
      </Wrap>
      <Wrap>
        <Heading>To be done:</Heading>
        <ToDo></ToDo>
      </Wrap>
      <Wrap>
        <AdvancedCounter />
      </Wrap>
      <Wrap>
        <Heading>Set timer for important tasks!</Heading>
        <TodoTimer></TodoTimer>
      </Wrap>
      <Wrap>
        <Gify />
      </Wrap>
      <Wrap>
        <Age />
      </Wrap>
    </Wrap>
  );
};
