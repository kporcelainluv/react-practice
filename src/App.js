import React from "react";
import Counter from "./Counter";
import { LocalDate } from "./CurrentTime";
import { ToDo } from "./Todo";
import { AdvancedCounter } from "./Counter2";
import { TodoTimer } from "./TimerTodo";
import { Gify } from "./Gify";
import { Age } from "./Age";


export const App = () => {
  return (
    <div className="container">
      {/*<h2 className="title"></h2>*/}
      <div className="container">
        <h2 className="subheading">Try to update the number</h2>
        <Counter />
      </div>
      <div className="container">
        <h2 className="subheading">The current time is:</h2>
        <LocalDate />
      </div>
      <div className="container">
        <h2 className="subheading">To be done:</h2>
        <ToDo />
      </div>
      <div className="container">
        <AdvancedCounter />
      </div>
      <div className="container">
        <h2 className="subheading">Set timer for important tasks!</h2>
        <TodoTimer />
      </div>
      <div className="container">
        <Gify />
      </div>
      <div className="container">
        <Age />
      </div>
    </div>
  );
};
