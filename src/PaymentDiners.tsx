import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <g key="0" clipPath="url(#payment-diners-clip)">
      <path
        fill="#fff"
        stroke="#000"
        strokeOpacity=".2"
        strokeWidth=".75"
        d="M32.996 23.625h.003c1.433.012 2.608-1.16 2.626-2.619V3.01a2.683 2.683 0 0 0-.78-1.874 2.58 2.58 0 0 0-1.85-.76H3.002a2.578 2.578 0 0 0-1.846.76 2.681 2.681 0 0 0-.78 1.871v17.985c.006.706.287 1.38.78 1.874a2.58 2.58 0 0 0 1.85.76h29.99Zm-.002.75h-.001.003-.002Z"
      />
      <path
        fill="#0165AC"
        d="M15.003 3.078v-.024h6v.024a9 9 0 0 1 0 17.952v.024h-6v-.024a9 9 0 0 1 0-17.952Z"
      />
      <path
        fill="#fff"
        d="M17.403 17.142a5.4 5.4 0 0 0 0-10.176v10.176Zm-3.6-10.176a5.4 5.4 0 0 0 0 10.176V6.966Zm1.8 12.888a7.8 7.8 0 1 1 0-15.6 7.8 7.8 0 0 1 0 15.6Z"
      />
    </g>,
    <defs key="1">
      <clipPath id="payment-diners-clip">
        <path fill="#fff" d="M0 0h36v24H0z" />
      </clipPath>
    </defs>,
  ],
  'PaymentDiners',
  { viewBox: '0 0 36 24' },
);
