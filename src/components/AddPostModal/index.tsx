import React, { useState } from 'react';
import {
	Container,
	ContainerCards,
	ContainerReceiver,
	Text,
	ContainerDonor,
	Description,
} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface AddPostModalProps {
	handleRequest(): void;
}

export default function AddPostModal({ handleRequest }: AddPostModalProps) {
	const navigation = useNavigation();

	function navigateToDonationRequest() {
		handleRequest();
		navigation.navigate('DonationRequest');
	}

	return (
		<Container>
			<Text>Escolha o que gostaria de fazer</Text>

			<ContainerCards>
				<ContainerReceiver onPress={navigateToDonationRequest}>
					<FontAwesome5 name='clipboard-list' size={40} color='#005556' />
					<Description>Receber um material</Description>
				</ContainerReceiver>

				<ContainerDonor>
					<FontAwesome5 name='hand-holding-heart' size={40} color='#005556' />
					<Description>Doar um material</Description>
				</ContainerDonor>
			</ContainerCards>
		</Container>
	);
}
