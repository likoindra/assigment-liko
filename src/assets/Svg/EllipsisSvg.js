import React from 'react';
import {Svg, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const EllipsisIcon = props => {
  const isColor = props.color ? props.color : '#FFF';
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="none"
      {...props}>
      <G clip-path="url(#clip0_263_4578)">
        <Path
          d="M24 16C26.2 16 28 14.2 28 12C28 9.8 26.2 8 24 8C21.8 8 20 9.8 20 12C20 14.2 21.8 16 24 16ZM24 20C21.8 20 20 21.8 20 24C20 26.2 21.8 28 24 28C26.2 28 28 26.2 28 24C28 21.8 26.2 20 24 20ZM24 32C21.8 32 20 33.8 20 36C20 38.2 21.8 40 24 40C26.2 40 28 38.2 28 36C28 33.8 26.2 32 24 32Z"
          fill={isColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_263_4578">
          <Rect width="48" height="48" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EllipsisIcon;
