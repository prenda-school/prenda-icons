import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <circle cx="10" cy="12" r="4" fill="#F0F1F2" key="0" />,
    <path
      fillRule="evenodd"
      d="M10 3.25c-4.8325 0-8.75 3.9175-8.75 8.75s3.9175 8.75 8.75 8.75h4c4.8325 0 8.75-3.9175 8.75-8.75S18.8325 3.25 14 3.25h-4zM2.75 12c0-4.004 3.246-7.25 7.25-7.25h4c4.0041 0 7.25 3.246 7.25 7.25 0 4.0041-3.2459 7.25-7.25 7.25h-4c-4.004 0-7.25-3.2459-7.25-7.25zm4 0c0-1.7949 1.455-3.25 3.25-3.25 1.7949 0 3.25 1.4551 3.25 3.25s-1.4551 3.25-3.25 3.25c-1.795 0-3.25-1.4551-3.25-3.25zM10 7.25c-2.6234 0-4.75 2.1266-4.75 4.75s2.1266 4.75 4.75 4.75 4.75-2.1266 4.75-4.75S12.6234 7.25 10 7.25z"
      key="1"
    />,
  ],
  'ToggleOffDuotone',
);
