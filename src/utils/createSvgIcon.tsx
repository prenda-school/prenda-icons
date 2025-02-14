import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon/index.js';
import type React from 'react';

export default function createSvgIcon(
  svgPath: React.ReactElement | React.ReactElement[],
  displayName: string,
  defaultOptions?: Partial<SvgIconProps>,
) {
  const Component = (props: SvgIconProps) => (
    <SvgIcon {...defaultOptions} {...props}>
      {svgPath}
    </SvgIcon>
  );
  Component.displayName = `${displayName}Icon`;
  return Component;
}
