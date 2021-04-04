import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
			<TouchableOpacity onPress={navigateToPayDonation3}>
				<Text style={{textAlign: 'right', fontWeight: '700',fontSize: 18, color: '#005556', marginRight: 40}}>PRÓXIMO</Text>
			</TouchableOpacity>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={{flexDirection: 'row', marginTop: 30, marginBottom: 20}}>
					<View style={{width: 15, height: 15, backgroundColor: '#005556', borderRadius: 7, marginRight: 8}}></View>
					<View style={{width: 15, height: 15, backgroundColor: '#005556', borderRadius: 7, marginRight: 8}}></View>
					<View style={{width: 15, height: 15, backgroundColor: '#C4C4C4', borderRadius: 7}}></View>
				</View>
			</View>
		</Container>
	);
}
