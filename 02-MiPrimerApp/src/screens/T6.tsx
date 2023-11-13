import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaAzul} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column',
        //  justifyContent:'space-between',
       
        

    },
    cajaMorada:{
        height:100,
       flex:1,

        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
      
    },
    cajaNaranja:{
        height:100,
       flex:1,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
      
        
        
    },
    cajaAzul:{
        height:100,
      flex:2,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        
       
    },


});
