import React from 'react';
import {Svg, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const ArrowIcon = props => {
  const isColor = props.color ? props.color : '#FFF';
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={isColor}
      class="w-6 h-6">
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </Svg>
  );
};

export default ArrowIcon;
