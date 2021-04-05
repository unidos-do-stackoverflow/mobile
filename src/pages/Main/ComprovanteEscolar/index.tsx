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
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DonationRequest() {
	const navigation = useNavigation();

	function navigateToFotoComprovante() {
		navigation.navigate('FotoComprovante');
	}

	function NoChildren() {
		return (
			<>
				<Text>Agora pra finalizar o cadastro da criança, </Text>
				<BoldText>
					insira uma foto do comprovante de matrícula desse ano letivo :)
				</BoldText>
				<AddChildButton onPress={navigateToFotoComprovante}>
					<AntDesign name='camera' size={40} color='#005556' />
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
