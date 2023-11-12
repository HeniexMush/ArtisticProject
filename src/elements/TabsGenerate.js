import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../tabs/Explore';
import Liked from '../tabs/Liked';
import Search from '../tabs/Search';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


 

const Tab = createBottomTabNavigator();

const TabsGenerate = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'black'
        },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 29,
          color: 'white',
        },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name={'Explore'}
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="bars"
              size={20}
              color={focused ? 'white' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Liked'}
        component={Liked}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="like2"
              size={20}
              color={focused ? 'white' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={20}
              color={focused ? 'white' : 'gray'}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsGenerate;
