import {View, Text} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import Main from './main';
import styles from './styles';
import Homepage from '@Organism/Homepage';
import ChatScreen from '@Organism/Chat';
import ChatDetail from '@Organism/ChatDetail';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Stack.Screen name="main-navigator" component={Homepage} />
      <Stack.Screen name="chat-screen" component={ChatScreen} />
      <Stack.Screen name="detail-chat-screen" component={ChatDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
