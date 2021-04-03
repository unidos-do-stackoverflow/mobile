import React from 'react';
import { View, Text } from 'react-native';
import { Container, DonateButton, DonateButtonText } from './style';
import { useNavigation } from '@react-navigation/native';

export default function index() {
	const navigation = useNavigation();

	function navigateToPayDonation() {
		navigation.navigate('PayDonation');
	}

	return (
		<Container>
			<DonateButton>
				<DonateButtonText onPress={navigateToPayDonation}>
					Fazer doação
				</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
