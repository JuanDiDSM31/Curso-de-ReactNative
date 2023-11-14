import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {colores, styles} from '../theme/AppTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Pro extends StackScreenProps<any, any> {}
interface Pro extends DrawerScreenProps<any, any> {}
export const Pagina1 = ({navigation}: Pro) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={35} color={colores.primario} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.margenGlobal}>
      <Text
        style={{
          ...styles.title,
          // backgroundColor:'black',
          textAlign: 'center',
          // paddingHorizontal:100
        }}>
        Pagina numero 1{' '}
      </Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text>Navegar con argumentos</Text>
      {/* view de TouchableOpacity */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.btn_grande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 1,
              nombre: 'Juan Diego',
            })
          }>
             <Icon name="skull" size={30} color='black' />
          <Text style={styles.btn_text}> Juan Diego</Text>
        </TouchableOpacity>

        {/* segunda persona */}
        <TouchableOpacity
          style={{...styles.btn_grande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 2,
              nombre: 'Jesus',
            })
          }>
            <Icon name="logo-angular" size={30} color='yellow' />
          <Text style={styles.btn_text}> Jesus</Text>
        </TouchableOpacity>
      </View>
      {/* fin del view de TouchableOpacity */}
    </View>
  );
};
