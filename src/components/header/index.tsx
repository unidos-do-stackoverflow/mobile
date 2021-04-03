import React from 'react';
import { Container, Text, TextDescription, ContainerTitle } from './styles';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Header() {
    return (

        <Container>

            <ContainerTitle>
                <FontAwesome name="file" size={20} color="#005556" /> 
                <Text>PEDIDO DE DOAÇÃO</Text>
            </ContainerTitle>
            
                <TextDescription>Cadastro de criança</TextDescription>
            

		</Container>

    )
}
