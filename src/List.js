import React from "react";
import { projectsList } from "./consts";

export const List = ({ link }) => {
  return (
    <div className="container">
      <h2 className="title">
        Learn and practice React.js with those exercises
      </h2>
      <ul>
        {projectsList.map(project => {
          const pathToComponent = `${link}${project.path}`;
          return (
            <li key={project.path}>
              <a href={pathToComponent}>{project.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
