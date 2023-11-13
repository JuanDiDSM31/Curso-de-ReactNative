import { SafeAreaView } from 'react-native';
import { BoxObjectModel } from './src/screens/BoxObjectModel';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TScreen } from './src/screens/TScreen';

export const App = () => {
  return (
//  <HolaMundoScreen/>
      <>
       <SafeAreaView style={{flex: 1}}>
       {/* <BoxObjectModel/> */}
       {/* <DimensionesScreen/> */}
       {/* <PositionScreen/> */}
       {/* <FlexScreen/> */}
       <TScreen/>
       </SafeAreaView>
      </ >
  )
}
// export default App;
