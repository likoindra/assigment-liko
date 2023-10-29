import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  containerUpdates: {
    flex: 1,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imagesUpdate: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#02FF67',
  },
  content: {
    flex: 1,
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerCalls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatMessages: {
    width: '90%',
  },

  phone: {
    width: 18,
    height: 18,
  },

  unread: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#25D366',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
