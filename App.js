import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsGenerate from './src/elements/TabsGenerate';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
      <TabsGenerate  />
    </NavigationContainer>
  )

}


