import React, { useEffect } from 'react';
import {Text, View} from 'react-native';

export const Tab3 = () => {
    useEffect(() => {
        console.log('tab numero 3')
      }, [])
  return (
    <View>
      <Text>Tab1</Text>
    </View>
  );
};
