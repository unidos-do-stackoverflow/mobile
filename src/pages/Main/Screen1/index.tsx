import React from 'react';
import { View} from 'react-native';
import { Container, ContainerTitle, TextTitle, ContainerDescription, Text, TextBold } from './styles';

export default function Screen1() {
	

	return (
	
	<Container>

		<ContainerTitle> 

			<TextTitle>PEDIDO DE DOAÇÃO</TextTitle>

		</ContainerTitle>

		<ContainerDescription>
			<Text>Você ainda não possui nenhuma criança cadastrada :( </Text>
			<TextBold>Registre abaixo para prosseguir com o pedido de doação</TextBold>
		</ContainerDescription>

	</Container>
	);		
}
