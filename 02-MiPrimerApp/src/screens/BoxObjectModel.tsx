import { StyleSheet, Text, View } from "react-native"


export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textP}>
        Box Object Model
        </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
      backgroundColor:'red'
    },
    textP:{
      paddingHorizontal:20,
      paddingVertical:20,
      fontSize:20,
      
      marginHorizontal:20,
      borderWidth:10,
     
      textAlign:"center"
      
    }
});
