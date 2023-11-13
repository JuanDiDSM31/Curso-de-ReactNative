import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const T4 = () => {
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
        justifyContent:'center',
        

    },
    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        position:'absolute',
        top:0,
        alignSelf:'flex-end'
    },
    cajaNaranja:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        alignSelf:'center',
       
        
        
    },
    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        position:'absolute',
        bottom:0,
       
    },


});
