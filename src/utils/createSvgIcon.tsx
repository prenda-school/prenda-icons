import Recat from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function createSvgIcon(
  svgPath: React.ReactElement | React.ReactElement[],
  displayName: string,
) {
  const Component = (props: SvgIconProps) => (
    <SvgIcon {...props}>{svgPath}</SvgIcon>
  );
  Component.displayName = `${displayName}Icon`;
  return Component;
}
