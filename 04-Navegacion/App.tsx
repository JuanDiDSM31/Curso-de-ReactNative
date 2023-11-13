import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {  Text, View } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { ML } from './src/navigator/ML';

export const App = () => {
 
  return (
  
<NavigationContainer>
  
{/* <StackNavigator/> */}
{/* <MenuLateral/> */}
  <ML/>
</NavigationContainer>
 
  )
}
