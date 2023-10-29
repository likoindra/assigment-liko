import {PixelRatio, Platform} from 'react-native';
import {screenWidth} from './Layouts';

const scale = screenWidth / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FontSize = {
  xsmall: normalize(11),
  caption: normalize(12),
  small: normalize(13),
  s: normalize(12),
  m: normalize(14),
  body: normalize(14),
  lead: normalize(16),
};
