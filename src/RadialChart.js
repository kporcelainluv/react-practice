import React from "react";
import classNames from "classnames";

export const RadialChart = ({
  radius,
  progress,
  strokeWidth,
  dimension,
  color,
  maxLength,
  nameClass
}) => {
  const circleRadius = Math.min(radius, 80);
  const circumference = 2 * 3.14 * circleRadius;
  const strokeLength = (circumference / maxLength) * progress || 0;
  const name = "radial-chart";
  return (
    <div className={classNames(`${name} ${nameClass || ""}`)}>
      <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
        <circle
          className="radial-chart-total"
          stroke="WHITE"
          strokeWidth={strokeWidth}
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
        <circle
          className="radial-chart-progress"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${strokeLength},${circumference}`}
          strokeLinecap="round"
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
      </svg>
    </div>
  );
};
