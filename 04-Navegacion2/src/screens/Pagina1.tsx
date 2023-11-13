import React, { useEffect } from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
// interface Pro extends StackScreenProps<any, any> {}
interface Pro extends DrawerScreenProps<any, any> {}
export const Pagina1 = ({navigation}: Pro) => {
  useEffect(() => {
  navigation.setOptions({
    headerLeft: ()=> (<Button title='Menu' onPress={()=>navigation.toggleDrawer()}/>)
  })
  
   
  }, [])
  
  return (
    <View style={styles.margenGlobal}>
      <Text style={{...styles.title,
      // backgroundColor:'black',
      textAlign:'center',
      }}>Pagina numero 1 </Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text>Navegar con argumentos</Text>
      {/* view de TouchableOpacity */}
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
      style={{...styles.btn_grande,
      backgroundColor:'#5856D6'}}
        onPress={() =>
          navigation.navigate('Persona', {
            id: 1,
            nombre: 'Juan Diego',
          })
        }>
        <Text style={styles.btn_text}> Juan Diego</Text>
      </TouchableOpacity>

      {/* segunda persona */}
      <TouchableOpacity
      style={{...styles.btn_grande, 
      backgroundColor:'#FF9427'}}
        onPress={() =>
          navigation.navigate('Persona', {
            id: 2,
            nombre: 'Jesus',
          })
        }>
        <Text style={styles.btn_text}> Jesus</Text>
      </TouchableOpacity>
      </View>
      {/* fin del view de TouchableOpacity */}
    </View>
  );
};
