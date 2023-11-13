import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {Setting} from '../screens/Setting';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width}=useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={
      {
        headerShown:false,
      }
    }
    // drawerType={width>=768? 'permanent' :  'front'}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home',headerShown:false}} component={StackNavigator} />
      <Drawer.Screen name="Setting"        options={{title:'settings'}} component={Setting} />
    </Drawer.Navigator>
  );
};
