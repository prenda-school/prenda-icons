import React from "react";
import createSvgIcon from "../utils/createSvgIcon";

export default createSvgIcon(
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity={0.12}
      cx={12}
      cy={12}
      r={10}
      stroke="#253858"
      strokeWidth={2}
    />
    <path
      d="M11.825 1.993c-.01-.547.428-1.004.974-.964A11 11 0 1 1 1.064 13.181c-.06-.544.382-.997.93-1.006.547-.01.993.428 1.062.97a9.017 9.017 0 1 0 9.777-10.123c-.545-.05-.998-.481-1.008-1.029"
      fill="#253858"
    />
  </svg>,
  "Incomplete",
);
