import React from 'react';
import { View} from 'react-native';
import { Container, ContainerTitle, TextTitle, ContainerIcon, Text, TextBold } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

export default function Screen1() {
	

	return (
	
	<Container>

		<ContainerTitle> 

			<TextTitle>PEDIDO DE DOAÇÃO</TextTitle>

		</ContainerTitle>

		<View>
			<Text>Você ainda não possui nenhuma criança cadastrada :( </Text>
			<TextBold>Registre abaixo para prosseguir com o pedido de doação</TextBold>
			<ContainerIcon>
				<Ionicons name="md-person-add-sharp" size={24} color="black" />
			</ContainerIcon>

		</View>

	</Container>
	);		
}
