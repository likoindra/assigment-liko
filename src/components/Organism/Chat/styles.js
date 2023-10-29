import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  header: {
    width: '100%',
    backgroundColor: '#0e806a',
    justifyContent: 'center',
  },
  headerWrapper: {
    paddingBottom: 16,
    width: '100%',
  },
  chatContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
