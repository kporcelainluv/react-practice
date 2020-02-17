import React, { useState, useEffect } from "react";
import {
  getDiffYears,
  getdiffMonths,
  getdiffWeeks,
  getdiffDays,
  getDiffHours,
  getDiffMins,
  getDiffSecs
} from "./utils";

import { RadialChart } from "./RadialChart";

export const Age = () => {
  const [age, setAge] = useState("1996-05-04");
  const [timer, updateTimer] = useState(0);

  let [year, month, day] = age.split("-");
  month = (parseInt(month) - 1).toString();

  const diffYears = getDiffYears({ year, month, day });
  const diffMonths = getdiffMonths({ year, month, day });
  const diffWeeks = getdiffWeeks({ year, month, day });
  const diffDays = getdiffDays({ year, month, day });
  const diffHours = getDiffHours({ year, month, day });
  const diffMinutes = getDiffMins({ year, month, day });
  const diffSeconds = getDiffSecs({ year, month, day });

  useEffect(() => {
    setInterval(() => {
      updateTimer(x => x + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Enter your age</h2>
      <form
        style={{ margin: "auto" }}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          type="date"
          onChange={e => {
            setAge(e.target.value);
          }}
        />
        <button className="button">Enter</button>
        <p>Your Birthday is: {age}</p>

        <ul style={{ padding: "0" }}>
          <li className="age-element">
            <div className="age-element__years"> </div> Years: {diffYears}
          </li>
          <li className="age-element">
            <div className="age-element__months"> </div> Months: {diffMonths}
          </li>
          <li className="age-element">
            <div className="age-element__weeks"> </div> Weeks: {diffWeeks}
          </li>
          <li className="age-element">
            <div className="age-element__days"> </div> Days: {diffDays}
          </li>
          <li className="age-element">
            <div className="age-element__hours"> </div> Hours: {diffHours}
          </li>
          <li className="age-element">
            <div className="age-element__minutes"> </div> Minutes: {diffMinutes}
          </li>
          <li className="age-element">
            <div className="age-element__seconds"> </div> Seconds: {diffSeconds}
          </li>
        </ul>

        <div className="cicles">
          <RadialChart
            radius={60}
            progress={diffSeconds}
            strokeWidth={30}
            dimension={180}
            color="#6D6875"
            maxLength={60}
            nameClass="circle-1"
          />
          <RadialChart
            radius={80}
            progress={diffMinutes}
            strokeWidth={20}
            dimension={210}
            color="#B5838D"
            maxLength={60}
            nameClass="circle-2"
          />
          <RadialChart
            radius={100}
            progress={diffHours}
            strokeWidth={20}
            dimension={300}
            color="#E5989B"
            maxLength={60}
            nameClass="circle-3"
          />
          <RadialChart
            radius={120}
            progress={diffDays}
            strokeWidth={15}
            dimension={395}
            color="#FFB4A2"
            maxLength={30}
            nameClass="circle-4"
          />
          <RadialChart
            radius={140}
            progress={diffWeeks}
            strokeWidth={10}
            dimension={480}
            color="#FFCDB2"
            maxLength={4}
            nameClass="circle-5"
          />
          <RadialChart
            radius={160}
            progress={diffMonths}
            strokeWidth={10}
            dimension={560}
            color="#6D6875"
            maxLength={12}
            nameClass="circle-6"
          />
          <RadialChart
            radius={180}
            progress={diffYears}
            strokeWidth={10}
            dimension={650}
            color="#B5838D"
            maxLength={100}
            nameClass="circle-7"
          />
        </div>
      </form>
    </div>
  );
};
