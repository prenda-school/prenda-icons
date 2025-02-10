import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <circle cx="12" cy="12" r="10" fill="#F0F1F2" key="0" />,
    <path
      fillRule="evenodd"
      d="M2.75 12c0-5.1086 4.1414-9.25 9.25-9.25s9.25 4.1414 9.25 9.25-4.1414 9.25-9.25 9.25S2.75 17.1086 2.75 12zM12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 5.9371 4.813 10.75 10.75 10.75 5.9371 0 10.75-4.8129 10.75-10.75 0-5.937-4.8129-10.75-10.75-10.75zm.5303 6.2196a.7499.7499 0 0 0-1.0606 0l-3 3a.75.75 0 0 0 1.0606 1.0607L11.25 9.8106V16a.75.75 0 0 0 1.5 0V9.8106l1.7197 1.7197a.75.75 0 0 0 1.0606-1.0607l-3-3z"
      key="1"
    />,
  ],
  'ArrowTopCircleDuotone',
);
