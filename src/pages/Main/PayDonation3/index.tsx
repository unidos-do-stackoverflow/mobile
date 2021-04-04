import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from './styles';

export default function PayDonation2() {

	const HeaderTitle = ()=>{
		return(
			<View style={{padding: 30, marginTop: 20}}>
				<View style={{flexDirection: 'row', alignItems: 'center',}}>
					<MaterialCommunityIcons name="hand-heart" size={33} color="#005556" />
					<Text style={{fontSize: 20, fontWeight: '700', color: '#005556', marginLeft: 10, marginTop: 7}}>PAGAMENTO CONCLUÍDO</Text>
				</View>
			</View>
		);
	};

	return (
		<Container>
			<HeaderTitle/>
		</Container>
	);
}
