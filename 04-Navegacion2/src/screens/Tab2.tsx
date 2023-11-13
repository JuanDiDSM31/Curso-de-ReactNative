import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab2 = () => {
    useEffect(() => {
        console.log('tab numero 2')
      }, [])
  return (
    <View>
        <Text>
            Tab2
        </Text>
    </View>
  )
}
