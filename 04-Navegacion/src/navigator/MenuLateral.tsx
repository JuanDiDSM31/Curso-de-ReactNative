import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreens } from '../screens/SettingScreens';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { useNavigation } from '@react-navigation/native';
import {useWindowDimensions} from 'react-native'
import { Text } from 'react-native'

 const Drawer = createDrawerNavigator();

export const  MenuLateral =()=> {
const {width}=useWindowDimensions()

    return (
    <Drawer.Navigator 
     useLegacyImplementation={false}
      // drawerType={width>=768? "permanent" : "front"}
    >

      <Drawer.Screen name="StackNavigator" options={{title:'Home'}}  component={StackNavigator} />
      <Drawer.Screen name="SettingScreens" options={{title:'Settings'}} component={SettingScreens} />

      {/* <Drawer.Screen  name="p2" component={Pagina2Screen}/> */}
    </Drawer.Navigator>
  )
}

