import {View, Touchable} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '@Atom/Text';

const Community = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <Text size={16} variant="sbold" style={styles.tHeader}>
          Stay connected with community
        </Text>
        <Text size={14} style={styles.tBody}>
          Communities bring members together in topic-based groups, and make it
          easy to get admin announcements. Any community you're added to will
          appear here.
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonExample}>
        <Text size={12} color="#fff" variant='bold'>Start your community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Community;
