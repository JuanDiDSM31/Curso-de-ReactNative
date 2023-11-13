import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1 = () => {
    useEffect(() => {
      console.log('tab1')
    }, [])
    
  return (
    <View>
        <Text>
            Tab1 aaaa
        </Text>
    </View>
  )
}
