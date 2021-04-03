import React from 'react';
import { View, Text } from 'react-native';
import { Container, DonateButton, DonateButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function PayDonation() {
	const navigation = useNavigation();

	function navigateToPayDonation2() {
		navigation.navigate('PayDonation2');
	}

	return (
		<Container>
			<Text>Início do fluxo de doação</Text>
			<DonateButton onPress={navigateToPayDonation2}>
				<DonateButtonText>Próxima tela</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
