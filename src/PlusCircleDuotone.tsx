import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <circle cx="12" cy="12" r="9" fill="#F0F1F2" key="0" />,
    <path
      fillRule="evenodd"
      d="M3.75 12c0-4.5564 3.6936-8.25 8.25-8.25 4.5563 0 8.25 3.6936 8.25 8.25 0 4.5563-3.6937 8.25-8.25 8.25-4.5564 0-8.25-3.6937-8.25-8.25zM12 2.25c-5.3848 0-9.75 4.3652-9.75 9.75s4.3652 9.75 9.75 9.75 9.75-4.3652 9.75-9.75S17.3848 2.25 12 2.25zM12.75 8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0v-3.25H16a.75.75 0 0 0 0-1.5h-3.25V8z"
      key="1"
    />,
  ],
  'PlusCircleDuotone',
);
