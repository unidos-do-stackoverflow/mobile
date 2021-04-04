import React from 'react';
import { View, Text } from 'react-native';
import { Container, DonateButton, DonateButtonText } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PayDonation2() {
	const navigation = useNavigation();

	function navigateToPayDonation3() {
		navigation.navigate('PayDonation3');
	}

	const HeaderTitle = ()=>{
		return(
			<View style={{padding: 30, marginTop: 20}}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<MaterialCommunityIcons name="hand-heart" size={33} color="#005556" />
					<Text style={{fontSize: 18, fontWeight: '700', color: '#005556', marginLeft: 10}}>FAZER UMA DOAÇÃO</Text>
				</View>
				<Text style={{fontSize: 14, fontWeight: '700', color: '#005556', marginTop: 3}}>Preencha os dados do Cartão</Text>
			</View>
		);
	};

	return (
		<Container>
			<HeaderTitle/>
			<DonateButton onPress={navigateToPayDonation3}>
				<DonateButtonText>Próxima tela</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
