//createStackNavigator
import Cadastro from './src/Cadastro';
import Login from './src/Login'
import { TEMAS } from './src/styles/temas'
import { NativeBaseProvider, StatusBar } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}> 
      <StatusBar backgroundColor={TEMAS.colors.black[100]}/>
        {/* <Login/> */}
        <Cadastro/>
    </NativeBaseProvider>
  );
}

