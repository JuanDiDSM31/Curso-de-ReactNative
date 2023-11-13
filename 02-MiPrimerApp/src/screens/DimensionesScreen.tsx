import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native"

// const {width, height}= Dimensions.get("window");
export const DimensionesScreen = () => {
const {width, height}= useWindowDimensions();
  return (
   <View>
     <View style={styles.contsiner}>
     <View style={{...styles.cajaMorada,
    width:width*2 
    }}
     
     />
     <View style={styles.CajaAmarilla} />
    </View>
    <Text style={styles.title}>
      W: {width}  H: {height} 
    </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  contsiner:{
    width:'100%',
        height:200,
        backgroundColor:'red'
  },
  title:{
      textAlign:"center",
      fontSize:30
  },
    cajaMorada:{
        backgroundColor:'#5856D6',
        // width:'50%',
        height:'50%',
      
    }, 
    CajaAmarilla:{
      backgroundColor:'#F0A23B',
      // height:'50%',
      //   width:'50%'
    }
});