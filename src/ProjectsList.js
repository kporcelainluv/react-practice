import React from "react";
import nanoid from "nanoid";
import { projectsList } from "./consts";

export const ProjectsList = ({ link }) => {
  return (
    <div className="container">
      <h2 className="title title--centered">
        Learn and practice React.js with those exercises
      </h2>
      <ul className="project-list">
        {projectsList.map(project => {
          const pathToComponent = `${link}${project.path}`;
          return (
            <li key={nanoid()}>
              <a href={pathToComponent}>{project.name}</a>
              <span className='project-list__desc'>- {project.desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
