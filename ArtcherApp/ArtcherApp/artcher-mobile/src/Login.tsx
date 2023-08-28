import { VStack,  Image, Text, Box, FormControl, 
  Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
// import Logo from './assets/Logo.png'
import Logo from './assets/logon.png'


export default function Login() {
  return(
    <VStack flex={0} justifyContent='center' padding={1}>
      <Image source={Logo} alt='Logo Artcher'/> 

    
      <Box>
        <FormControl marginTop={3}>
            <FormControl.Label>Email</FormControl.Label>
            <Input placeholder='Insira seu email' size='lg' width='100%' borderRadius='lg' backgroundColor='gray.100' shadow={1}/>
        </FormControl>
        <FormControl marginTop={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Insira sua senha' size='lg' width='100%' borderRadius='lg' bg='gray.100' shadow={3}/>
        </FormControl>
      </Box>
      <Button w='100%' bg='blue.800' mt={10} borderRadius='lg'>
        Entrar
      </Button>
      <Link href='src\Login.tsx' mt={2}>Esqueceu sua senha?</Link>

      <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
        <Text>Login</Text>
        <TouchableOpacity>
          <Text color='blue.500'>
            Faça seu cadastro
          </Text>
        </TouchableOpacity> 
      </Box>
    </VStack>
  )
}