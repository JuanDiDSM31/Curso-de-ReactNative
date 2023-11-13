import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
// interface RouteParams {
//   id: number;
//   nombre: string; //¿Minusculas?
// }
interface Pro extends StackScreenProps<RootStackParams, 'Persona'> {}
export const Persona = ({route, navigation}: Pro) => {
  const p = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: p.nombre,
    });
  }, []);

  return (
    <View>
      <Text style={styles.title}> {JSON.stringify(p, null, 3)}</Text>
    </View>
  );
};
