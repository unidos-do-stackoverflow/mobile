import React from 'react';
import { View, Text } from 'react-native';
import { Container, DonateButton, DonateButtonText } from './style';

export default function index() {
	return (
		<Container>
			<DonateButton>
				<DonateButtonText>Fazer doação</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
