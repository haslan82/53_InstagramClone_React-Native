import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Grid = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.44762 4V20M4.19048 14.5524L20.1905 14.5524M14.4 4V20M4.19048 9.6L20.1905 9.6M4 4H20V20H4V4Z"
      stroke="black"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
  </Svg>
);

