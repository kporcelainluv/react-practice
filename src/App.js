import React from "react";
import Counter from "./Counter";
import { LocalDate } from "./CurrentTime";
import { ToDo } from "./Todo";
import { AdvancedCounter } from "./Counter2";
import { TodoTimer } from "./TimerTodo";
import { Gify } from "./Gify";
import { Age } from "./Age";
import { List } from "./List";

const renderComponent = (link, path) => {
  if (path === "") {
    return <List link={link} />;
  } else if (path === "counter") {
    return <Counter />;
  } else if (path === "advanced_counter") {
    return <AdvancedCounter />;
  } else if (path === "current_time") {
    return <LocalDate />;
  } else if (path === "todo_list") {
    return <ToDo />;
  } else if (path === "todo_list_with_timer") {
    return <TodoTimer />;
  } else if (path === "gify") {
    return <Gify />;
  } else if (path === "age") {
    return <Age />;
  }
};

export const App = () => {
  const currentLink = window.location.href;
  const currentPath = window.location.href.split("/")[3];
  console.log({ currentPath });

  return <div>{renderComponent(currentLink, currentPath)}</div>;
};
