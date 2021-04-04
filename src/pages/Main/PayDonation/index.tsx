import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, DonateButton, DonateButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { InputFields } from '../../Auth/Login/styles';
import { useState } from 'react';

export default function PayDonation() {
	const navigation = useNavigation();
	const [valueDonation, setValueDonation] = useState('');
	function onChange (value:any){
			setValueDonation(value);
	};

	function navigateToPayDonation2() {
		navigation.navigate('PayDonation2');
	}

	const HeaderTitle = ()=>{
		return(
			<View style={{padding: 30}}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<MaterialCommunityIcons name="hand-heart" size={33} color="#005556" />
					<Text style={{fontSize: 18, fontWeight: '700', color: '#005556', marginLeft: 10}}>FAZER UMA DOAÇÃO</Text>
				</View>
				<Text style={{fontSize: 14, fontWeight: '700', color: '#005556', marginTop: 3}}>Apoie com quanto quiser</Text>
			</View>
		);
	};

	const Body = ()=>{
		return(
			<View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 20, marginBottom: 130}}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Text style={{fontSize: 30, marginRight: 10}}>R$</Text>
					<InputFields>
						<TextInput
							style={{maxWidth: 150, fontSize: 30}}
							keyboardType = 'decimal-pad'
							//onChangeText = {(text)=>setValueDonation(text)}
							//value = {valueDonation}
							value = '0.00'
						/>
					</InputFields>					
				</View>

			</View>
		);
	}

	return (
		<Container>
			<HeaderTitle/>
			<Body/>
			<DonateButton onPress={navigateToPayDonation2}>
				<DonateButtonText>Próxima tela</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
