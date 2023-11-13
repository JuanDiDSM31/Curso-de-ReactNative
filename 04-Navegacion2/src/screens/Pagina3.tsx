import React from 'react';
import {View, Text, Button} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme';
interface Pro extends StackScreenProps <any, any>{};
export const Pagina3 = ({navigation}:Pro) => {
  return (
    <View style={styles.margenGlobal}>
      <Text style={styles.title}>Pagina 3</Text>

      <Button title='Regresar'
      onPress={()=> navigation.pop()}
      />

<Button title='Home'
      onPress={()=> navigation.popToTop()}
      />
    </View>
  );
};
