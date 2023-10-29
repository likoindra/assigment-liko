import {Pressable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '@Atom/Header';
import {ArrowIcon} from '@Assets/Svg';
import Text from '@Atom/Text';
import {useNavigation} from '@react-navigation/native';
import {LIST_CHAT} from '@Services/Chat';

const ChatDetail = props => {
  const navigate = useNavigation();

  const data = props.route.params.props?.[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <Header backable color="#000000" detail data={data} />
        </View>
      </View>
    </View>
  );
};

export default ChatDetail;
