import { ITextProps, Text } from 'native-base'
import { ReactNode } from 'react'

interface TituloProps extends ITextProps {
    children: ReactNode 
}


export function Titulo({ children }: TituloProps){
    return(
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={10}>
            {children}
        </Text>
    )
}