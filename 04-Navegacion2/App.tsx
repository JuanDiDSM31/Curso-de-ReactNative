import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MenuLateral} from './src/routes/MenuLateral';
import { StackNavigator } from './src/routes/StackNavigator';
import { ML } from './src/routes/ML';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <MenuLateral /> */}
     {/* <StackNavigator/> */}
     <ML/>
     {/* <Tabs/> */}
    </NavigationContainer>
  );
};
