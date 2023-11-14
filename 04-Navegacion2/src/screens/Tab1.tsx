import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {colores, styles} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export const Tab1 = () => {
  useEffect(() => {
    console.log('tab1');
  }, []);
  const {top: marginTop} = useSafeAreaInsets();
  return (
    <View style={{...styles.margenGlobal, marginTop}}>
      <Text style={{...styles.title, color: 'black', textAlign: 'center'}}>
        iconos{' '}
      </Text>
      <Text>
        <Icon name="logo-react" size={80} color={colores.primario} />
        <Icon name="logo-tux" size={80} color={colores.primario} />
        <Icon name="logo-npm" size={80} color={colores.primario} />
        <Icon name="logo-javascript" size={80} color={colores.primario} />
        <Icon name="logo-github" size={80} color={colores.primario} />
        <Icon name="logo-facebook" size={80} color={colores.primario} />
        <Icon name="logo-reddit" size={80} color={colores.primario} />
      </Text>
    </View>
  );
};
