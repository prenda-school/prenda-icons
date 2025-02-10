import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [
    <rect width="20" height="18" x="2" y="3" fill="#F0F1F2" rx="4" key="0" />,
    <path
      fillRule="evenodd"
      d="M9.9436 2.25h4.1128c1.8378 0 3.2934 0 4.4326.1531 1.1724.1577 2.1214.4898 2.8698 1.2381.7483.7484 1.0804 1.6974 1.2381 2.8698.1531 1.1392.1531 2.5948.1531 4.4325v2.113c0 1.8377 0 3.2933-.1531 4.4325-.1577 1.1724-.4898 2.1214-1.2381 2.8698-.7484.7483-1.6974 1.0804-2.8698 1.2381-1.1392.1531-2.5948.1531-4.4325.1531H9.9436c-1.8378 0-3.2934 0-4.4326-.1531-1.1724-.1577-2.1214-.4898-2.8698-1.2381-.7483-.7484-1.0804-1.6974-1.238-2.8698-.1532-1.1392-.1532-2.5948-.1532-4.4326v-2.1128c0-1.8378 0-3.2934.1531-4.4326.1577-1.1724.4898-2.1214 1.2381-2.8698.7484-.7483 1.6974-1.0804 2.8698-1.238C6.6502 2.25 8.1058 2.25 9.9436 2.25zM5.7108 3.8898c-1.006.1352-1.5857.3889-2.0089.8121s-.6769 1.0029-.8121 2.009C2.7516 7.7385 2.75 9.0931 2.75 11v2c0 1.9068.0016 3.2615.1398 4.2892.1352 1.006.3889 1.5857.8121 2.0089s1.0029.6769 2.009.8121c1.0276.1382 2.3823.1398 4.2891.1398h4c1.9068 0 3.2615-.0016 4.2892-.1398 1.006-.1352 1.5857-.3889 2.0089-.8121s.6769-1.0029.8121-2.0089c.1382-1.0277.1398-2.3824.1398-4.2892v-2c0-1.9068-.0016-3.2615-.1398-4.2892-.1352-1.006-.3889-1.5857-.8121-2.0089s-1.0029-.6769-2.0089-.8121C17.2615 3.7516 15.9068 3.75 14 3.75h-4c-1.9068 0-3.2615.0016-4.2892.1398zM8.9552 8.25h.5666c.2142 0 .411 0 .5764.0113.1777.012.373.0397.5715.122a1.75 1.75 0 0 1 .9471.947c.0822.1985.1098.3939.1219.5715.0113.1653.0113.3622.0113.5764V10.5h-1.5c0-.2432-.0004-.3881-.0078-.4961-.0045-.0668-.0106-.0952-.0125-.1026a.2502.2502 0 0 0-.131-.131c-.0074-.0019-.0358-.008-.1026-.0125-.108-.0074-.2529-.0078-.4961-.0078H9c-.4926 0-.7866.0016-.9973.03-.0966.013-.145.0282-.1667.0372a.124.124 0 0 0-.0103.0047l-.0025.0013-.0013.0025a.1231.1231 0 0 0-.0047.0103c-.009.0217-.0243.0701-.0373.1667-.0283.2107-.0299.5047-.0299.9973v2c0 .4926.0016.7866.03.9973.013.0966.0282.145.0372.1667a.1116.1116 0 0 0 .0047.0103l.0013.0024-.0001-.0001-.0003-.0001.0004.0002v.0001l.0004.0003-.0002-.0001-.0002-.0002v-.0001.0001l.0025.0013a.1064.1064 0 0 0 .0103.0047c.0217.009.0701.0243.1667.0373.2107.0283.5047.0299.9973.0299h.5c.2432 0 .3881-.0004.4961-.0078.0668-.0045.0952-.0106.1026-.0125a.2504.2504 0 0 0 .131-.131c.0019-.0074.008-.0358.0125-.1026.0074-.108.0078-.2529.0078-.4961h1.5v.0218c0 .2142 0 .4111-.0113.5764-.0121.1777-.0397.373-.1219.5715a1.75 1.75 0 0 1-.9471.9471c-.1985.0822-.3938.1098-.5715.1219-.1653.0113-.3622.0113-.5764.0113h-.5665c-.4329.0001-.8297.0001-1.1525-.0433-.3555-.0478-.7312-.1602-1.0402-.4693-.309-.309-.4215-.6847-.4693-1.0402-.0434-.3228-.0434-.7196-.0433-1.1525v-2.0894c0-.4329-.0001-.8297.0433-1.1525.0478-.3555.1602-.7312.4693-1.0402.309-.309.6847-.4215 1.0402-.4693.3228-.0434.7196-.0434 1.1524-.0433zm6.5448 0h-.0448c-.4328 0-.8296-.0001-1.1524.0433-.3555.0478-.7312.1602-1.0402.4693-.3091.309-.4215.6847-.4693 1.0402-.0434.3228-.0434.7196-.0433 1.1524v2.0896c-.0001.4328-.0001.8296.0433 1.1524.0478.3555.1602.7312.4693 1.0402.309.3091.6847.4215 1.0402.4693.3228.0434.7196.0434 1.1525.0433h.5665c.2142 0 .4111 0 .5764-.0113.1777-.0121.373-.0397.5715-.1219a1.75 1.75 0 0 0 .9471-.9471c.0822-.1985.1098-.3938.1219-.5715.0113-.1653.0113-.3622.0113-.5764V13.5h-1.5c0 .2432-.0004.3881-.0078.4961-.0045.0668-.0106.0952-.0125.1026a.2504.2504 0 0 1-.131.131c-.0074.0019-.0358.008-.1026.0125-.108.0074-.2529.0078-.4961.0078h-.5c-.4926 0-.7866-.0016-.9973-.0299-.0966-.013-.145-.0283-.1667-.0373l-.0068-.0029a.0527.0527 0 0 1-.0035-.0018l-.0025-.0013v-.0001l-.0013-.0024a.0972.0972 0 0 1-.0047-.0103c-.009-.0217-.0243-.0701-.0373-.1667-.0283-.2107-.0299-.5047-.0299-.9973v-2c0-.4926.0016-.7866.0299-.9973.013-.0966.0283-.145.0373-.1667a.1058.1058 0 0 1 .0047-.0103l.0013-.0025.0025-.0013a.1116.1116 0 0 1 .0103-.0047c.0217-.009.0701-.0243.1667-.0373.2107-.0283.5047-.0299.9973-.0299h.5c.2432 0 .3881.0004.4961.0078.0668.0045.0952.0106.1026.0125a.2502.2502 0 0 1 .131.131c.0019.0074.008.0358.0125.1026.0074.108.0078.2529.0078.4961h1.5v-.0218c0-.2142 0-.4111-.0113-.5764-.0121-.1776-.0397-.373-.1219-.5715a1.75 1.75 0 0 0-.9471-.947c-.1985-.0823-.3938-.11-.5715-.122-.1653-.0113-.3622-.0113-.5764-.0113H15.5zm-1.1768 5.9267-.0004-.0002.0003.0001.0001.0001zm0 0v.0001l.0003.0002-.0003-.0002v-.0001z"
      key="1"
    />,
  ],
  'ClosedCaptionsDuotone',
);
