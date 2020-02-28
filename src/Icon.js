import React from "react";
import icons from "./css/sprite.svg";

export const Icon = ({ name }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
