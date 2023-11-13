import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreens } from '../screens/SettingScreens';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { useNavigation } from '@react-navigation/native';
import {Image, useWindowDimensions} from 'react-native'
import {Text, View, Button,} from 'react-native';
import React from 'react';
import { styles } from '../theme/AppTheme';


 const Drawer = createDrawerNavigator();

export const  ML =()=> {
const {width}=useWindowDimensions()

    return (
    <Drawer.Navigator 
     useLegacyImplementation={false}
      // drawerType={width>=768? "permanent" : "front"}
      drawerContent={(props)=> <MI {...props}  />}
    >

      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreens"  component={SettingScreens} />

      {/* <Drawer.Screen  name="p2" component={Pagina2Screen}/> */}
    </Drawer.Navigator>
  )
}

const MI=(props: DrawerContentComponentProps)=>{
    return(
      <DrawerContentScrollView>
        <View style={styles.cen}>
            <Image
            source={{
                uri:`https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png`
            }}
            style={styles.foto}
            />
        </View>
      </DrawerContentScrollView>
    )
  }