import { StackScreenProps } from '@react-navigation/stack'
import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import { styles } from '../theme/AppTheme'
import { RootStackParams } from '../navigator/StackNavigator'

// interface RouteParams{
//   id:number;
//   name:String;
//   Apellido:String;
//   ApellidoM:String;
// }
interface Pro extends StackScreenProps <RootStackParams, 'Persona'>{}; //El string es la forma de navegar hacia el 
export const PersonaScreen = ({route, navigation}:Pro) => {

  const params= route.params 
useEffect ( ()=>{
  navigation.setOptions({
    title: params!.name
 })
},[])

 

  return (

    <View style={styles.margenGlobal}>
        <Text style={styles.title}>
            {
              JSON.stringify(params, null, 3)
            }
        </Text>
    </View>
  )
}
