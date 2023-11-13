import React from 'react'
import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { Pagina3 } from '../screens/Pagina3';
import { Persona } from '../screens/Persona';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParams={
  Pagina1:undefined,
  Pagina2:undefined,
  Pagina3:undefined,
  Persona:{id:Number, nombre:string}
}
const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{
          backgroundColor:'transparent',
        },
        // cardStyle={}
    }}
    >
      <Stack.Screen name="Pagina1" options={{title:'Pgina 1'}} component={Pagina1} />
      <Stack.Screen name="Pagina2" options={{title:'Pgina 2'}} component={Pagina2} />
      <Stack.Screen name="Pagina3" options={{title:'Pgina 3'}} component={Pagina3} />
      <Stack.Screen name="Persona"  component={Persona} />
      
    </Stack.Navigator>
  )
}