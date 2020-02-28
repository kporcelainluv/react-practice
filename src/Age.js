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

import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    // height: 550,
    width: 800,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 360,
      hollow: {
        margin: 10,
        size: "10%",
        background: "transparent",
        image: undefined
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false
        }
      }
    }
    // hundreds: "#ff6d88",
  },
  colors: [
    "#cbb4f5",
    "#79c2ff",
    "#69e4dd",
    "#5ee697",
    "#92e16c",
    "#fdc958",
    "#fe8f54"
  ],
  labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
  legend: {
    show: true,
    floating: true,
    fontSize: "20px",
    position: "left",
    offsetX: 0,
    offsetY: 0,
    labels: {
      useSeriesColors: true
    },
    markers: {
      size: 0
    },
    formatter: function(seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
    },
    itemMargin: {
      horizontal: 3
    }
  },
  responsive: [
    {
      breakpoint: 750,
      options: {
        width: 350,
        height: 950,

        legend: {
          show: true,
          position: "bottom",
          offsetY: 100
        }
      }
    }
  ]
};

const Donut = () => {
  return;
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

  const series = [
    diffYears,
    diffMonths,
    diffWeeks,
    diffDays,
    diffHours,
    diffMinutes,
    diffSeconds
  ];

  useEffect(() => {
    setInterval(() => {
      updateTimer(x => x + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <svg
        viewBox="0 0 120 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="50">
          <text x="25">
            <textPath xlinkHref="#curve">Dangerous Curves Ahead</textPath>
          </text>
        </circle>
        <circle cx="60" cy="60" r="44" fill={"white"} />
        <circle
          cx="60"
          cy="60"
          r="47"
          fill="transparent"
          stroke="green"
          strokeWidth={"6"}
          strokeDasharray={"149,464, 213.52"}
          style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          // strokeWidth="3"
          // strokeDasharray="85 15"
          // strokeDashoffset="0"
        />
      </svg>
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

        <div id="chart">
          <ReactApexChart options={options} series={series} type="radialBar" />
        </div>
      </form>
    </div>
  );
};
