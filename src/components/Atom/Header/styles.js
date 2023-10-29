import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerHomepage: {
    // backgroundColor: '#232D36',
    paddingHorizontal: 22.5,
    paddingVertical: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  containerDetail: {
    paddingHorizontal: 22.5,
    paddingVertical: 12,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: "#0e806a"
  },
  wrapperDetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    paddingHorizontal: 22.5,
    paddingVertical: 12,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  textHomepage: {},

  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  icon: {
    width: 24,
    height: 24,
  },
  iconEllipsis: {
    width: 24,
    height: 24,
  },

  icons: {
    flex: 1,
    height: "30%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 20,
    gap: 16
  },

  backButton: {
    width: 30,
    height: 30,
  },

  images: {
    width: 100,
    height: 100,
    borderRadius: 150,
  },

  details: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
  },
  iconsWrapper: {
    width: '100%',
    flexDirection: 'row',
    // paddingBottom: 40,
    paddingTop: 40
  },
});
