import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerScreenProps} from '@react-navigation/drawer';
interface p extends DrawerScreenProps<any, any> {}
export const Pagina1Screen = ({navigation}: p) => {
  useEffect(() => {
    
    navigation.setOptions({
      
      headerLeft: () => (
        <Button title="menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.margenGlobal}>
      <Text style={styles.title}>Esta Es la pagina q</Text>
      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('pagina2')}
      />
      <Text>Navegar con Argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.btn_grande,
            backgroundColor: '#5856d6',
          }}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 1,
              name: 'Juan',
            })
          }>
          <Text style={styles.btn_text}>Juan</Text>
        </TouchableOpacity>

        {/* Seundo de armando */}

        <TouchableOpacity
          style={{
            ...styles.btn_grande,
            backgroundColor: '#ff9427',
          }}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 2,
              name: 'Armando',
            })
          }>
          <Text style={styles.btn_text}>Armando</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
