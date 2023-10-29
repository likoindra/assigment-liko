import Fonts from '@Theme/Fonts';
import {Colors, FontSize} from '@Theme/Variables';
import React from 'react';
import {Text as RNText} from 'react-native';

const Text = ({
  text,
  size = 'body',
  variant = 'regular',
  style,
  children,
  color = '#242424',
  numberOfLine,
}) => {
  let fontSize = {fontSize: typeof size === 'number' ? size : FontSize[size]};
  return (
    <RNText
      numberOfLine={numberOfLine}
      style={[{color: color}, fontSize, Fonts[variant], style]}>
      {text}
      {children}
    </RNText>
  );
};

export default Text;
