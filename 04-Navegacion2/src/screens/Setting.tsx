import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {styles} from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Setting = () => {
 const insets= useSafeAreaInsets()
  return (
    <View style={{...styles.margenGlobal, marginTop: insets.top}}>
      <Text style={styles.title} >
        Settings screens
      </Text>
    </View>
  );
};
