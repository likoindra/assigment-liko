import {View, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {AddIcon, EllipsisIcon} from '@Assets/Svg';
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

const Status = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusHeader}>
        <Text variant="sbold" size={16}>
          Status
        </Text>
        <EllipsisIcon color="#000000" />
      </View>

      <View style={styles.myStatus}>
        <View style={styles.wrapperStatus}>
          <View styles={styles.myStatusCircle}>
            <Image
              source={require('@Assets/Images/1.jpg')}
              style={styles.images}
            />
            <View style={styles.absoluteIcon}>
              <AddIcon />
            </View>
          </View>

          <View style={styles.myStatusText}>
            <Text size={16} variant="medium">
              My status
            </Text>
            <Text size={14} color="#A0A09E">
              Tap to add status update
            </Text>
          </View>
        </View>

        <View style={styles.recUpdate}>
          <Text size={16}>Recent Updates</Text>

          <View style={styles.wrapperUpdate}>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={item => <ProfileCard item={item} updates />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Status;
