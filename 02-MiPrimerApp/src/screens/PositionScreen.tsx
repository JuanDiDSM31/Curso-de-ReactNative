import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (

  <View style={styles.container}>
    <View style={styles.cajaVerde}/>
    <View style={styles.cajaMorada}/>
    <View style={styles.cajaNaranjaa}/>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
      // width:400,
      // height:400,
      flex:1,
        backgroundColor: '#28C4D9',
        // justifyContent:'center',
        // alignItems:'center'
    },
     cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top:0,
        right:0
        
    },
    cajaNaranjaa:{
        width:100,
        height:100,
        backgroundColor:'#f0a23b',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
     bottom:0,
     right:0
        
    },
    cajaVerde:{
      // width:100,
      // height:100,
      backgroundColor:'green',
      borderWidth:10,
      borderColor:'white',
      // position:'absolute',
      ...StyleSheet.absoluteFillObject
      
  },
});