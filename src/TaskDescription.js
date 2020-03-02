import React from "react";

export const TaskDescription = ({ title, desc, className = "" }) => {
  const centeredTitle = className ? "" : " title--centered";
  return (
    <div className={"container--centered" + className}>
      <h2 className={"title" + centeredTitle}>{title}</h2>
      <ul className="list">
        {desc.map(elm => {
          return <li key={elm}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};
