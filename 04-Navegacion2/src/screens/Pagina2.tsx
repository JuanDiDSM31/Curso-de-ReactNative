import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { styles } from '../theme/AppTheme';
export const Pagina2 = () => {
const n =useNavigation()

useEffect(() => {
 n.setOptions({
    title:'Hola',
    // headerBacktitle:'atras' Este solo se utiliza en iphone
 })
}, [])


  return (
    <View style={styles.margenGlobal}>
      <Text style={styles.title} >Pagina 2</Text>
      <Button
      title='Ir a pagina 3'
      onPress={()=> n.navigate('Pagina3') }
      />
    </View>
  );
};
