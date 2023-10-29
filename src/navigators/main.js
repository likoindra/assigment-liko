import {View, Text, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  CallScreen,
  ChatScreen,
  CommunityScreen,
  StatusScreen,
} from '@Containers/index';
import {PeopleIcon} from '@Assets/Svg';
const Tab = createMaterialTopTabNavigator();
import styles from './styles';
const Main = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="chat"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarIndicatorStyle: {backgroundColor: 'white'},
          tabBarStyle: {
            backgroundColor: '#0e806a',
          },
          tabBarLabelStyle: {fontSize: 10, fontFamily: 'Poppins-SemiBold'},
        }}>
        <Tab.Screen
          name="community"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({color}) => <PeopleIcon color={color} />,
            tabBarLabelStyle: styles.tabBar,
          }}
        />
        <Tab.Screen name="chat" component={ChatScreen} />
        <Tab.Screen name="updates" component={StatusScreen} />
        <Tab.Screen name="call" component={CallScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Main;
