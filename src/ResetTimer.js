import React, { useState, useEffect, useRef } from "react";
import nanoid from "nanoid";
import { TaskDescription } from "./TaskDescription";

export const ResetTimer = () => {
  const [state, setState] = useState({
    clickId: undefined,
    seconds: 0
  });

  const intervalId = useRef(undefined);

  useEffect(() => {
    if (state.clickId) {
      intervalId.current = setInterval(
        () => setState(s => ({ ...s, seconds: s.seconds + 1 })),
        1000
      );

      return () => {
        setState(s => ({ ...s, seconds: 0 }));
        clearInterval(intervalId.current);
      };
    }
  }, [state.clickId]);

  return (
    <div className="reset-timer__container">
      <TaskDescription
        title={"Resetting timer"}
        desc={[
          "Press the button to start timer",
          "Press the button again to reset the timer"
        ]}
      />
      <button
        className="button"
        type="button"
        onClick={() => {
          setState(s => ({ ...s, clickId: nanoid(), seconds: 0 }));
        }}
      >
        {state.seconds} seconds
      </button>
    </div>
  );
};
