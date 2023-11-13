import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {View, Text, Button} from 'react-native'
import { styles } from '../theme/AppTheme'
interface p extends StackScreenProps <any, any >{};

export const Pagina3 = ({navigation}:p) => {

  return (
    <View style={styles.margenGlobal}>
        <Text style={styles.title}>
        Esta es la pagina 3
        </Text>
        <Button 
        title='Regresar'
       onPress={()=>navigation.pop()}
        />

    <Button 
        title='Ir al home'
       onPress={()=>navigation.popToTop()}
        />
    </View>
  )
}
