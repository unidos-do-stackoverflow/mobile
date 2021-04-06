import React from 'react';
import {
	Container,
	Text,
	BoldText,
	MiddleContainer,
	AddChildButton,
} from './styles';
import Header from '../../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Budget() {
	const navigation = useNavigation();

	function navigateToChooseStationery() {
		navigation.navigate('ChooseStationery');
	}

	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle='Orçamento'>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>

			<MiddleContainer>
				<Text>Montar orçamento</Text>
				<BoldText>
					Você ainda não possui nenhum orçamento. Crie um novo abaixo :)
				</BoldText>
				<AddChildButton onPress={navigateToChooseStationery}>
					<Entypo name='add-to-list' size={40} color='#005556' />
				</AddChildButton>
			</MiddleContainer>
		</Container>
	);
}
