import {StyleSheet} from 'react-native';
export const colores={
  primario:'#5856D6'
}
export const styles = StyleSheet.create({
  margenGlobal: {
    marginHorizontal: 20,
    //  alignContent:"flex-end"
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    
  },
  btn_grande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btn_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cen: {
    // Este es el contenido del view donde va la imagen
    alignItems: 'center',
    backgroundColor: 'red',
  },
  foto: {
    height: 150,
    width: 150,
    borderRadius: 150,
  },
  menuContainer: {
    flexDirection:'column',
    marginVertical: 30,
    marginHorizontal: 50,
    // backgroundColor: 'blue',
  },
  menuTocuh: {
    marginVertical:20
  },
  menuText: {
    fontSize: 20,
  },
});
