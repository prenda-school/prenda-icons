import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <circle cx="12" cy="12" r="9" fill="#F0F1F2" key="0" />,
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.3832 4.3342-9.75 9.75-9.75 3.2226 0 5.6366 1.3459 7.2301 2.6738.387.3225.7268.6448 1.0199.9484V3.5a.75.75 0 0 1 1.5 0V8a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h2.4824a11.4073 11.4073 0 0 0-1.2125-1.1738C16.8634 4.904 14.7774 3.75 12 3.75c-4.5842 0-8.25 3.692-8.25 8.25 0 4.5563 3.6936 8.25 8.25 8.25 4.5563 0 8.25-3.6937 8.25-8.25a.75.75 0 0 1 1.5 0c0 5.3848-4.3652 9.75-9.75 9.75S2.25 17.3848 2.25 12z"
      key="1"
    />,
  ],
  'RotateCwDuotone',
);
