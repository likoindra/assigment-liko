import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'column',
    gap: 16,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  myStatus: {
    flexDirection: 'column',
    gap: 16,
  },
  wrapperStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  myStatusCircle: {
    width: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',
  },

  images: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  absoluteIcon: {
    width: 25,
    height: 25,
    borderRadius: 50,
    padding: 5,
    backgroundColor: '#0e806a',
    position: 'absolute',
    top: 25,
    left: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  myStatusText: {},

  wrapperUpdate : {

  },
  recUpdate : {
    // backgroundColor:"red"
  }
});
