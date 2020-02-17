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

import { RadialChart } from "./LifeTimer/RadialChart";
import "./css/style.css";

export const Age = () => {
  const [age, setAge] = useState("1996-05-04");
  const [state, updateState] = useState(0);

  let [year, month, day] = age.split("-");
  month = (parseInt(month) - 1).toString();

  const diffYears = getDiffYears({ year, month, day });
  const diffMonths = getdiffMonths({ year, month, day });
  const diffWeeks = getdiffWeeks({ year, month, day });
  const diffDays = getdiffDays({ year, month, day });
  const diffHours = getDiffHours({ year, month, day });
  const diffMinutes = getDiffMins({ year, month, day });
  const diffSeconds = getDiffSecs({ year, month, day });
  // eslint-disable-next-line
  useEffect(() => {
    setInterval(() => {
      updateState(x => x + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Enter your age</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="date"
          onChange={e => {
            setAge(e.target.value);
          }}
        />
        <button>Enter</button>

        {/*<h2>Your Birthday {age}</h2>*/}
        {/*<h2>Years: {diffYears}</h2>*/}
        {/*<h2>Months: {diffMonths}</h2>*/}
        {/*<h2>Weeks: {diffWeeks}</h2>*/}
        {/*<h2>Days: {diffDays}</h2>*/}
        {/*<h2>Hours: {diffHours}</h2>*/}
        {/*<h2>Minutes: {diffMinutes}</h2>*/}
        {/*<h2>Seconds: {diffSeconds}</h2>*/}
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
