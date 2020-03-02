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

import "./css/style.css";

const countProgress = (radius, progress) => {
  const circumference = 2 * 3.14 * radius;
  const strokeLength = (circumference / 100) * progress;
  return `${strokeLength}, ${circumference}`;
};

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

  const theme = {
    bg: "white",
    track: "#f4f4f4",
    text: "rgba(0,0,0,0.6)",
    hundreds: "#ff6d88",
    seconds: "#fe8f54",
    minutes: "#fdc958",
    hours: "#92e16c",
    days: "#5ee697",
    weeks: "#69e4dd",
    months: "#79c2ff",
    years: "#cbb4f5"
  };

  return (
    <div className="container">
      <h2 className="title title--centered">Enter your age</h2>
      <form
        style={{ margin: "auto" }}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="input-container">
          <input
            className="input"
            type="date"
            onChange={e => {
              setAge(e.target.value);
            }}
          />
          <button className="black-button">Enter</button>
        </div>
        <p>
          You are {diffYears} years, {diffMonths} months, {diffWeeks} weeks,
          {diffMonths} months, {diffDays} days, {diffMinutes} mins,
          {diffSeconds} sec
        </p>
      </form>
      <svg
        viewBox="0 0 120 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="60" cy="60" r="55" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="49" fill={"white"} />

          <circle
            cx="60"
            cy="60"
            r="52"
            fill="transparent"
            stroke={theme.years}
            strokeWidth={"6"}
            strokeDasharray={countProgress(52, diffYears)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />

          <circle cx="60" cy="60" r="48" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="42" fill={"white"} />
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="transparent"
            stroke={theme.months}
            strokeWidth={"6"}
            strokeDasharray={countProgress(45, diffMonths)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />

          <circle cx="60" cy="60" r="41" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="35" fill={"white"} />
          <circle
            cx="60"
            cy="60"
            r="38"
            fill="transparent"
            stroke={theme.weeks}
            strokeWidth={"6"}
            strokeDasharray={countProgress(38, diffWeeks)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />

          <circle cx="60" cy="60" r="34" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="28" fill={"white"} />
          <circle
            cx="60"
            cy="60"
            r="31"
            fill="transparent"
            stroke={theme.days}
            strokeWidth={"6"}
            strokeDasharray={countProgress(31, diffDays)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />

          <circle cx="60" cy="60" r="27" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="21" fill={"white"} />
          <circle
            cx="60"
            cy="60"
            r="24"
            fill="transparent"
            stroke={theme.hours}
            strokeWidth={"6"}
            strokeDasharray={countProgress(24, diffHours)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />

          <circle cx="60" cy="60" r="20" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="14" fill={"white"} />
          <circle
            cx="60"
            cy="60"
            r="17"
            fill="transparent"
            stroke={theme.minutes}
            strokeWidth={"6"}
            strokeDasharray={countProgress(17, diffMinutes)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />

          <circle cx="60" cy="60" r="13" fill={"#F4F4F4"} />
          <circle cx="60" cy="60" r="7" fill={"white"} />
          <circle
            cx="60"
            cy="60"
            r="10"
            fill="transparent"
            stroke={theme.seconds}
            strokeWidth={"6"}
            strokeDasharray={countProgress(10, diffSeconds)}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />
        </g>
      </svg>

      <div className="pulsating-circle" />
    </div>
  );
};
