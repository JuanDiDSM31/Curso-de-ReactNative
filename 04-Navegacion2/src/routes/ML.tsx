import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {Setting} from '../screens/Setting';
import {Text, useWindowDimensions, Image, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const ML = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    
    screenOptions={{headerShown:false}}
      // drawerType={width>=768? 'permanent' :  'front'}
      drawerContent={props => <Mi {...props} />}>
      <Drawer.Screen
        name="Tabs"
        options={{title: 'Tabs'}}
        component={Tabs}
      />
      <Drawer.Screen
        name="Setting"
        options={{title: 'settings'}}
        component={Setting}
      />
    </Drawer.Navigator>
  );
};

const Mi = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.cen}>
        <Image
          source={{
            uri: `https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png`,
          }}
          style={styles.foto}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Tabs')}
        style={styles.menuTocuh} >
          <Text style={styles.menuText} >Navegación con TAB</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Setting')}
        style={styles.menuTocuh}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
