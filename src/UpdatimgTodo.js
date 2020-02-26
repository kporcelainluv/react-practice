import React, { useState, useEffect, useRef } from "react";
import nanoid from "nanoid";

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
    <div style={{ margin: "100px auto" }}>
      <button
        style={{ margin: "auto", display: "flex" }}
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
