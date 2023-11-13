import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

// interface p extends StackScreenProps <any, any>{};
export const Pagina2Screen = () => {
  const n = useNavigation();
  useEffect(() => {
    n.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'regresar',
    });
  });

  return (
    <View style={styles.margenGlobal}>
      <Text style={styles.title}>Esta es la pagina 2</Text>
      <Button title="Ir a pagina 3" onPress={() => n.navigate('pagina3')} />
    </View>
  );
};
