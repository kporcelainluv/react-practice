import React from "react";
import Counter from "./Counter";

import { LocalDate } from "./CurrentTime";
import { TodoList } from "./TodoList";
import { AdvancedCounter } from "./Counter2";
import { TodoTimer } from "./TimerTodo";
import { Gify } from "./Gify";
import { Age } from "./Age";
import { ProjectsList } from "./ProjectsList";
import { ResetTimer } from "./ResetTimer";
import { Pathname } from "./consts";
import "./css/style.css";

export const App = () => {
  const link = window.location.href;
  const path = window.location.href.split("/")[3];

  if (path === "") {
    return <ProjectsList link={link} />;
  } else if (path === Pathname.COUNTER) {
    return <Counter />;
  } else if (path === Pathname.ADVANCED_COUNTER) {
    return <AdvancedCounter />;
  } else if (path === Pathname.TIME) {
    return <LocalDate />;
  } else if (path === Pathname.TODO_LIST) {
    return <TodoList />;
  } else if (path === Pathname.TODO_LIST_TIMER) {
    return <TodoTimer />;
  } else if (path === Pathname.GIFY) {
    return <Gify />;
  } else if (path === Pathname.AGE) {
    return <Age />;
  } else if (path === Pathname.RESET_TIMER) {
    return <ResetTimer />;
  }
};
