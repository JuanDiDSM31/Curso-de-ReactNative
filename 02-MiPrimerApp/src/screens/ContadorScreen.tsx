import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
    const [Contador, setContador] = useState(10)
  return (
    <View style={styles.cont}>
        <Text 
        style={styles.a}
        >
            Contador: {Contador}
        </Text>
          <Fab tittle="+1"
           onPress={()=>setContador(Contador+1)}
           />
            <Fab tittle="-1"
            posicion='bl'
            onPress={()=>setContador(Contador-1)}
          />
          </View>
        )
      }


const styles=StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:'center'
  },
  a:{
    fontSize:24,
    top:-15,
    textAlign:'center',
  }, 
 

})

