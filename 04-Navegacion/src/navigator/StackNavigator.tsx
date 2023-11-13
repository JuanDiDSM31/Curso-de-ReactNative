import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3 } from '../screens/Pagina3';
import { PersonaScreen } from '../screens/PersonaScreen';
export type RootStackParams ={
  pagina1:undefined,
  pagina2:undefined,
  pagina3:undefined,
  Persona: {id:number, name:string}
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator =() => {
 
  return (
    <Stack.Navigator
    screenOptions={{
      // headerShown:false,
      header:{
        elevation:0,
        
        shadowColor: 'transparent' //este es para ios
      },

      cardStyle:{
        backgroundColor:'white'
      }
    }}
    >
      <Stack.Screen name="pagina1" options={{title:"Página 1"}} component={Pagina1Screen} /> 
      <Stack.Screen name="pagina2" options={{title:"Página 2"}} component={Pagina2Screen} />
      <Stack.Screen name="pagina3" options={{title:"Página 3"}} component={Pagina3} />
      <Stack.Screen name="Persona"  component={PersonaScreen} />
      
    </Stack.Navigator>
  );
}
