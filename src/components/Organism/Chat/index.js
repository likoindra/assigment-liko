import {
  View,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import Header from '@Atom/Header';
import axios from 'axios';
import Images from '@Theme/Images';
import {Bubble, GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import moment from 'moment';
import Text from '@Atom/Text';

const ChatScreen = props => {
  const data = props?.route?.params?.props;
  const isLoadingEarlierRef = useRef(false);
  const [messages, setMessages] = useState([]);
  const arrData = [data];
  const [text, setText] = useState('');
  const profileImageUrl = 'https://via.placeholder.com/150';
  const initialMessagesToLoad = 20;
  const additionalMessagesToLoad = 10;

  console.log(messages.length >= initialMessagesToLoad);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://private-e47e4-whatsappdummy.apiary-mock.com/chats',
        );
        if (response) {
          // console.log(response.data.data, '<<<<');
          const initialMessages = response.data.data.slice(
            0,
            initialMessagesToLoad,
          );
          setMessages(initialMessages);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  };

  const renderCustomTime = props => (
    <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
      <Text size={10} color="#808080">
        {moment(props.currentMessage.createdAt).format('h:mm A')}
      </Text>
    </View>
  );

  const loadEarlierMessages = async () => {
    if (isLoadingEarlierRef.current) {
      return;
    }

    isLoadingEarlierRef.current = true;
    try {
      const skip = messages.length;
      const response = await axios.get(
        `https://private-e47e4-whatsappdummy.apiary-mock.com/chats?skip=${skip}&limit=${additionalMessagesToLoad}`,
      );

      if (response) {
        console.log('Response Data:', response, 'yoooo');
        setMessages(previousMessages =>
          GiftedChat.prepend(previousMessages, response.data.data.reverse()),
        );
      } else {
        console.error('Failed to fetch additional data');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      isLoadingEarlierRef.current = false;
    }
  };

  const onEndReached = () => {
    if (messages.length >= initialMessagesToLoad) {
      loadEarlierMessages();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <Header backable name={data.name} data={arrData} />
        </View>
      </View>

      <View style={{flex: 1, paddingBottom: 20}}>
        <ImageBackground source={Images.CHAT_BG} style={styles.chatContainer}>
          <GiftedChat
            messages={messages}
            onSend={newMessages => onSend(newMessages)}
            user={{
              _id: 2,
              name: 'Indra',
              avatar: 'https://example.com/your-avatar.png',
            }}
            placeholder="Type your message..."
            renderAvatar={props => (
              <View style={{marginRight: 8}}>
                <Image
                // source={{uri: profileImageUrl}}
                // style={{width: 150, height: 150, borderRadius: 75}}
                />
              </View>
            )}
            renderBubble={props => (
              <Bubble
                {...props}
                wrapperStyle={{
                  left: {
                    backgroundColor: '#ffffff',
                  },
                  right: {
                    backgroundColor: '#dcf8c6',
                  },
                }}
                textStyle={{
                  left: {
                    color: '#000000', // Change the font color for received messages (User 2)
                  },
                  right: {
                    color: '#000000', // Change the font color for sent messages (User 1)
                  },
                }}
              />
            )}
            renderTime={renderCustomTime}
            renderInputToolbar={props => (
              <InputToolbar
                {...props}
                containerStyle={{
                  backgroundColor: '#f4f4f4',
                }}
              />
            )}
            onEndReached={onEndReached}
            loadEarlier={isLoadingEarlierRef.current}
            onLoadEarlier={loadEarlierMessages}
            listViewProps={{
              onEndReachedThreshold: 0.1, 
            }}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default ChatScreen;
