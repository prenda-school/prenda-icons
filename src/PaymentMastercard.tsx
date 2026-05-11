import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <g key="0" clipPath="url(#payment-mastercard-clip)">
      <path
        fill="#252525"
        d="M33 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
      />
      <path
        fill="#EB001B"
        d="M13.5 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      />
      <path
        fill="#F79E1B"
        d="M22.5 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      />
      <path
        fill="#FF5F00"
        fillRule="evenodd"
        d="M18 6a7.489 7.489 0 0 1 3 6 7.488 7.488 0 0 1-3 6 7.488 7.488 0 0 1-3-6 7.489 7.489 0 0 1 3-6Z"
        clipRule="evenodd"
      />
    </g>,
    <defs key="1">
      <clipPath id="payment-mastercard-clip">
        <path fill="#fff" d="M0 0h36v24H0z" />
      </clipPath>
    </defs>,
  ],
  'PaymentMastercard',
  { viewBox: '0 0 36 24' },
);
