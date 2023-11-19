import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsGenerate from './src/elements/TabsGenerate';

//default funcion generates tabs and navigation
export default function App() {
  
  return (
    <NavigationContainer>
      <TabsGenerate  />
    </NavigationContainer>
  )

}
