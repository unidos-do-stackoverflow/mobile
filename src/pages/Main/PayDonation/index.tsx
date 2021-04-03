import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles';
import { Appbar } from 'react-native-paper';

export default function PayDonation() {

	function Main (){

		return(
			<>
				<Appbar.Header>
					
				</Appbar.Header>
			</>
		);

	}

	return (
		<Container>
			<Text>Donation</Text>
		</Container>
	);
}
