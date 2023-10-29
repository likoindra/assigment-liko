import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {LinkIcon} from '@Assets/Svg';
import Text from '@Atom/Text';
import ProfileCard from '@Atom/ProfileCard';

const data = [
  {
    id: 1,
    photo: require('@Assets/Images/2.jpg'),
    createdAt: '2023-10-15T08:30:00Z',
    name: 'Dave',
  },
  {
    id: 2,
    photo: require('@Assets/Images/3.jpg'),
    createdAt: '2023-10-15T08:30:00Z',
    name: 'Robert',
  },
  {
    id: 3,
    photo: require('@Assets/Images/4.jpg'),
    createdAt: '2023-10-15T08:30:00Z',
    name: 'Edo',
  },
  {
    id: 4,
    photo: require('@Assets/Images/5.jpg'),
    createdAt: '2023-10-15T08:30:00Z',
    name: 'Jeff',
  },
  {
    id: 5,
    photo: require('@Assets/Images/6.jpg'),
    createdAt: '2023-10-15T08:30:00Z',
    name: 'Luke',
  },
];

const Calls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circleHeader}>
          <LinkIcon />
        </View>

        <View style={styles.textWrapper}>
          <Text variant="medium" size={14}>
            Create call link
          </Text>
          <Text size={14} color="#A0A09E">
            Share a link for your WhatsApp call
          </Text>
        </View>
      </View>

      <View style={styles.recUpdate}>
        <Text size={16}>Recent</Text>

        <View style={styles.wrapperUpdate}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={item => <ProfileCard item={item} calls />}
          />
        </View>
      </View>
    </View>
  );
};

export default Calls;
