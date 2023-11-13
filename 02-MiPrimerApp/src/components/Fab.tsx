import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from "react-native"

interface p{
    tittle:String;
    onPress:()=> void;
    posicion?: 'bl' | 'br';
}
export const Fab = ({tittle, onPress, posicion='br'}:p) => {
const ios=()=>{
return(

<TouchableOpacity style={[styles.fabLocationRight, (posicion==="bl"? styles.izquierda: styles.derecha)]}
onPress={onPress}
activeOpacity={0.75}
>

      <View style={styles.fab}>
      <Text style={styles.fabText}>
       {tittle}
      </Text>
      </View>
   
</TouchableOpacity>
)
}

const android=()=>{
return(
<TouchableOpacity style={[styles.fabLocationRight, (posicion==="bl"? styles.izquierda: styles.derecha)]} >
<TouchableNativeFeedback 
onPress={onPress}
 background={TouchableNativeFeedback.Ripple('black', false, 30)}
>
      <View style={styles.fab}>
      <Text style={styles.fabText}>
       {tittle}
      </Text>
      </View>
    </TouchableNativeFeedback>
</TouchableOpacity>
  
)
}
  
return (Platform.OS==="ios")?ios() : android();
}
const styles=StyleSheet.create({
    fabLocationRight:{
        position:'absolute',
        bottom:25,
        
         },
         derecha:{
          right:25
         },
         izquierda:{
          left:25
         },
         fab:{
           backgroundColor:'#5856d6',
           width:60,
           height:60,
           borderRadius:100,
           justifyContent:'center',
           shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 2,
         },
         fabText:{
           color: 'white',
           fontSize:25, 
           fontWeight:'bold',
           alignSelf:'center'
       
         }

})
