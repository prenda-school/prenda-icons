import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <g key="0" clipPath="url(#payment-amex-clip)">
      <path
        fill="#016FD0"
        d="M33 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
      />
      <path
        fill="#FFFFFE"
        fillRule="evenodd"
        d="M20.646 20.09v-8.55l15.221.013v2.363l-1.759 1.88 1.76 1.897v2.413h-2.81l-1.492-1.648-1.482 1.654-9.438-.02Z"
        clipRule="evenodd"
      />
      <path
        fill="#016FD0"
        fillRule="evenodd"
        d="M21.663 19.153V12.48h5.658v1.537h-3.826v1.044h3.735v1.512h-3.735v1.024h3.826v1.556h-5.658Z"
        clipRule="evenodd"
      />
      <path
        fill="#016FD0"
        fillRule="evenodd"
        d="m27.293 19.153 3.13-3.34-3.13-3.333h2.423l1.913 2.115 1.919-2.115h2.32v.053l-3.065 3.28 3.064 3.245v.095h-2.342l-1.948-2.136-1.927 2.136h-2.357Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFFFFE"
        fillRule="evenodd"
        d="M21.356 3.948h3.67l1.288 2.926V3.948h4.53l.78 2.192.784-2.192h3.46V12.5h-18.28l3.768-8.552Z"
        clipRule="evenodd"
      />
      <path
        fill="#016FD0"
        fillRule="evenodd"
        d="m22.05 4.877-2.96 6.668h2.03l.56-1.335h3.026l.559 1.335h2.08l-2.948-6.668h-2.346Zm.255 3.836.888-2.122.888 2.122h-1.776Z"
        clipRule="evenodd"
      />
      <path
        fill="#016FD0"
        fillRule="evenodd"
        d="M27.318 11.544V4.876l2.855.01 1.469 4.099 1.478-4.109h2.748v6.668l-1.768.015V6.98l-1.669 4.565h-1.614l-1.703-4.58v4.58h-1.796Z"
        clipRule="evenodd"
      />
    </g>,
    <defs key="1">
      <clipPath id="payment-amex-clip">
        <path fill="#fff" d="M0 0h36v24H0z" />
      </clipPath>
    </defs>,
  ],
  'PaymentAmex',
  { viewBox: '0 0 36 24' },
);
