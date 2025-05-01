import React from "react";
import createSvgIcon from "../utils/createSvgIcon";

export default createSvgIcon(
  <>
    {/* Reduced strokeWidth for background circle */}
    <circle cx="12" cy="12" r="8" stroke="#EBECF0" strokeWidth="1.5" />
    <mask id="a" fill="#fff">
      <path d="M11.86 3.953c-.02-1.078.847-1.986 1.908-1.796A10 10 0 1 1 2.225 14.11c-.227-1.053.65-1.95 1.728-1.97 1.077-.018 1.937.862 2.294 1.88a6.097 6.097 0 1 0 7.57-7.84c-1.029-.321-1.939-1.15-1.957-2.227Z" />
    </mask>
    <path
      stroke="#253858"
      // Reduced strokeWidth for main path
      strokeWidth="2"
      d="M11.86 3.953c-.02-1.078.847-1.986 1.908-1.796A10 10 0 1 1 2.225 14.11c-.227-1.053.65-1.95 1.728-1.97 1.077-.018 1.937.862 2.294 1.88a6.097 6.097 0 1 0 7.57-7.84c-1.029-.321-1.939-1.15-1.957-2.227Z"
      mask="url(#a)"
    />
  </>,
  "Incomplete",
);
