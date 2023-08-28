import { VStack,  Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/logon.png'

export default function Cadastro() {

    return(
        <VStack flex={0} justifyContent='center' padding={1}>
        <Image source={Logo} alt='Logo Artcher'/> 
  
      
        <Box>
          <FormControl marginTop={3}>
            <FormControl.Label>Your Name</FormControl.Label>
            <Input placeholder='Insira seu nome' size='lg' width='100%' borderRadius='lg' backgroundColor='gray.100' shadow={1}/>
          </FormControl>
          <FormControl marginTop={3}>
            <FormControl.Label>Your Email</FormControl.Label>
            <Input placeholder='Insira seu email' size='lg' width='100%' borderRadius='lg' bg='gray.100' shadow={3}/>
          </FormControl>
          <FormControl marginTop={3}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input placeholder='Insira sua senha' size='lg' width='100%' borderRadius='lg' bg='gray.100' shadow={3}/>
          </FormControl>
        </Box>
        <Button w='100%' bg='blue.800' mt={10} borderRadius='lg'>
          Sign Up
        </Button>
        {/* <Link href='https://www.alura.com.br' mt={2}>Fazer Login</Link> */}
  
        <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
          <Text>Login in with</Text>
          <TouchableOpacity>
          </TouchableOpacity> 
        </Box>
      </VStack>
    )
}