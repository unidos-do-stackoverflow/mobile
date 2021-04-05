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
import { Ionicons } from '@expo/vector-icons';

export default function DonationRequest() {
	function NoChildren() {
		return (
			<>
				<Text>Você ainda não possui nenhuma criança cadastrada :(</Text>
				<BoldText>
					Registre abaixo para prosseguir com o pedido de doação.
				</BoldText>
				<AddChildButton>
					<Ionicons name='ios-person-add' size={45} color='#005556' />
				</AddChildButton>
			</>
		);
	}

	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle='Cadastro de crianças'>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>

			<MiddleContainer>
				<NoChildren />
			</MiddleContainer>
		</Container>
	);
}
