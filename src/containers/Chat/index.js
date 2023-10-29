import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ProfileCard from '@Atom/ProfileCard';
import DATA from './data';
import {LIST_CHAT} from '@Services/Chat';

const dummy = {
  message: 'success',
  data: [
    {
      id: 1,
      text: 'Hi there!',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T10:00:00Z',
    },
    {
      id: 2,
      text: 'Hello!',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T10:15:00Z',
    },
    {
      id: 3,
      text: 'How are you?',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T10:30:00Z',
    },
    {
      id: 4,
      text: "I'm doing well, thanks!",
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T10:45:00Z',
    },
    {
      id: 5,
      text: "What's new?",
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T11:00:00Z',
    },
    {
      id: 6,
      text: 'Not much, just working on some projects.',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T11:15:00Z',
    },
    {
      id: 7,
      text: 'Sounds great!',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T11:30:00Z',
    },
    {
      id: 8,
      text: 'Do you have any plans for the weekend?',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T11:45:00Z',
    },
    {
      id: 9,
      text: 'Not yet. Maybe a hike or a movie night.',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T12:00:00Z',
    },
    {
      id: 10,
      text: 'That sounds like fun!',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T12:15:00Z',
    },
    {
      id: 11,
      text: 'We should plan something together.',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T12:30:00Z',
    },
    {
      id: 12,
      text: "Sure, let's do it!",
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T12:45:00Z',
    },
    {
      id: 13,
      text: "Great! I'll message you later to plan.",
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T13:00:00Z',
    },
    {
      id: 14,
      text: 'Looking forward to it!',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T13:15:00Z',
    },
    {
      id: 15,
      text: 'Have a great day!',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T13:30:00Z',
    },
    {
      id: 16,
      text: 'You too!',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T13:45:00Z',
    },
    {
      id: 17,
      text: 'Goodbye!',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T14:00:00Z',
    },
    {
      id: 18,
      text: 'See you later!',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T14:15:00Z',
    },
    {
      id: 19,
      text: 'Take care!',
      user: {
        id: 1,
        name: 'User 1',
      },
      createdAt: '2023-10-27T14:30:00Z',
    },
    {
      id: 20,
      text: 'You too!',
      user: {
        id: 2,
        name: 'User 2',
      },
      createdAt: '2023-10-27T14:45:00Z',
    },
  ],
};

const Chat = () => {
  const [data, setData] = useState(DATA);
  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={item => <ProfileCard item={item} />}
      />
    </View>
  );
};

export default Chat;
