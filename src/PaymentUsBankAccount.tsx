import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <g key="0" clipPath="url(#payment-us-bank-account-clip)">
      <path
        fill="#253858"
        fillRule="evenodd"
        d="m17.574 4.807-6.857 4.73a.117.117 0 0 0 .067.214h14.432a.117.117 0 0 0 .066-.214l.994-1.44a1.867 1.867 0 0 1-1.043 3.404v6.615c0 .133.034.264.098.38l.692 1.265a.867.867 0 0 1 .119.435v.004a.875.875 0 0 1-.886.875H10.743a.87.87 0 0 1-.747-.404.87.87 0 0 1-.024-.903l.697-1.271a.792.792 0 0 0 .098-.38V11.5a1.867 1.867 0 0 1-1.043-3.405l6.857-4.73.993 1.441Zm-.994-1.44a2.5 2.5 0 0 1 2.84 0l6.856 4.73-.994 1.44-6.856-4.73a.75.75 0 0 0-.852 0l-.994-1.44Zm4.566 8.134h2.337v6.615c0 .422.105.838.306 1.21H12.21c.2-.372.306-.788.306-1.21v-6.615h2.337v6.214a.875.875 0 0 0 1.75 0V11.5h2.791v6.214a.875.875 0 0 0 1.75 0V11.5Zm-4.054-4.603a.875.875 0 0 0 0 1.75h1.816a.875.875 0 0 0 0-1.75h-1.816Z"
        clipRule="evenodd"
      />
    </g>,
    <defs key="1">
      <clipPath id="payment-us-bank-account-clip">
        <path fill="#fff" d="M0 0h36v24H0z" />
      </clipPath>
    </defs>,
  ],
  'PaymentUsBankAccount',
  { viewBox: '0 0 36 24' },
);
