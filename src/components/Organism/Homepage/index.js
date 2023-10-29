import Main from '@Navigators/main';
import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '@Atom/Header';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <Header homepage />
        </View>
      </View>
      <View style={styles.nav}>
        <Main />
      </View>
    </View>
  );
};

export default Homepage;
