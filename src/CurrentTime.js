import React, { useState, useEffect } from "react";

export const LocalDate = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState(x => x + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="date">
        Current time is {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};
