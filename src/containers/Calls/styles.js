import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    paddingBottom: 16,
  },
  circleHeader: {
    width: 40,
    height: 40,
    backgroundColor: '#0e806a',
    borderRadius: 50,
    padding: 8,
  },
});
