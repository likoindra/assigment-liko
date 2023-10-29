import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 18,
  },

  wrapperText: {
    flexDirection: 'column',
    gap: 16,
    paddingBottom: 16,
  },

  tHeader: {
    textAlign: 'center',
  },
  tBody: {
    textAlign: 'center',
  },
  buttonExample: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 25,
    backgroundColor: '#0e806a',
    alignItems: 'center'
  },
});
