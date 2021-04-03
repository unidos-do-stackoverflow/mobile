import React from 'react';
import { View, Text } from 'react-native';
import { Container, DonateButton, DonateButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function PayDonation2() {
	const navigation = useNavigation();

	function navigateToPayDonation3() {
		navigation.navigate('PayDonation3');
	}

	return (
		<Container>
			<Text>Segunda tela do fluxo de doação</Text>
			<DonateButton onPress={navigateToPayDonation3}>
				<DonateButtonText>Próxima tela</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
