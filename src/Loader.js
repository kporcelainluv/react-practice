import React from "react";
import "./css/loader.css";
export const Loader = ({ size = "large" }) => {
  return (
    <div className={`loader loader--${size}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
