import React, { useState, useEffect } from "react";
// import Moment from "react-moment";

export const LocalDate = () => {
  // eslint-disable-next-line
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState(x => x + 1);
    }, 1000);
  }, []);

  return <div>{new Date().toLocaleTimeString()}</div>;
};
