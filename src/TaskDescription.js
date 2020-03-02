import React from "react";

export const TaskDescription = ({ title, desc, className = "" }) => {
  return (
    <div className={"container--centered" + className}>
      <h2 className="title">{title}</h2>
      <ul className="list">
        {desc.map(elm => {
          return <li key={elm}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};
