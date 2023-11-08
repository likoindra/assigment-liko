import {
  View,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './styles';
import moment from 'moment';
import Text from '@Atom/Text';
import {PhoneIcon} from '@Assets/Svg';
import {useNavigation} from '@react-navigation/native';

const ProfileCard = props => {
  const navigation = useNavigation();
  const data = props?.item?.item;

  if (props.calls) {
    return (
      <View style={styles.containerUpdates}>
        <Image source={data.photo} style={styles.images} />
        <View style={styles.content}>
          <View style={styles.headerCalls}>
            <Text size={16} variant="medium">
              {data.name}
            </Text>

            <View style={styles.phone}>
              <PhoneIcon />
            </View>
          </View>

          <View style={styles.chats}>
            <Text size={12} variant="sbold" color="#A0A09E">
              {moment(data.createdAt).format('h:mm A')}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  if (props.updates) {
    return (
      <Pressable
        style={styles.containerUpdates}
        onPress={() =>
          navigation.navigate('detail-status-screen', {props: data})
        }>
        <Image source={data?.photo} style={styles.imagesUpdate} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text size={16} variant="medium">
              {data?.name}
            </Text>
          </View>

          <View style={styles.chats}>
            <Text
              numberOfLine={1}
              size={12}
              color="#A0A09E"
              style={styles.chatMessages}>
              {moment(data?.createdAt).format('h:mm A')}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('chat-screen', {props: data})}>
      <Image source={data.photo} style={styles.images} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text size={16} variant="medium">
            {data.name}
          </Text>
          <Text size={12} variant="sbold" color="#A0A09E">
            {moment(data.createdAt).format('h:mm A')}
          </Text>
        </View>

        <View style={styles.chats}>
          <Text
            numberOfLine={1}
            size={12}
            color="#A0A09E"
            style={styles.chatMessages}>
            {data.lastMessage}
          </Text>

          {data.totalUnread > 0 && (
            <View style={styles.unread}>
              <Text size={10} color="#fff" variant="bold">
                {data.totalUnread}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
