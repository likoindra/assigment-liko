import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#000',
  },

  header: {
    width: '100%',
    // backgroundColor: '#0e806a',
    justifyContent: 'center',
  },
  headerWrapper: {
    paddingBottom: 16,
    width: '100%',
  },

  images: {
    // height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: ' center',
  },
  imagesStatus: {
    height: '100%',
    // resizeMode: "cover"
  },
});
