import React from 'react';
import { View, Text } from 'react-native';
import { Container, DonateButton, DonateButtonText } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { round } from 'react-native-reanimated';

export default function index() {
	const navigation = useNavigation();
	const list = {
		produto: [	{name: 'caneta', qtd: 5, value: '10,00' },
				  	{name: 'caderno', qtd: 3, value: '50,00' },
					{name: 'mochila', qtd: 1, value: '80,00' },
					{name: 'regua', qtd: 1, value: '5,00' },
					{name: 'papel a4', qtd: 2, value: '25,00' },
					{name: 'estojo', qtd: 1, value: '8,00' },
				],

		valueTotal: '60,00',
		valueSub: '30,00'
	}

	
	
	function navigateToPayDonation() {
		navigation.navigate('PayDonation');
	}


	const ListItem = ()=>{

		return(
			<View style={{flexDirection: 'row', borderWidth: 1, borderColor:'#85929E', padding: 5, justifyContent: 'space-around'}}>
				<View style={{flexDirection: 'row'}}>
					<MaterialIcons name="all-inbox" size={22} color="black"/>
					<Text style={{fontSize: 16, marginLeft: 4}}>{list.produto[0].name}</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={{fontSize: 16}}>Qtd {list.produto[0].qtd}</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={{fontSize: 16, color: '#00A725'}}>R$ {list.produto[0].value}</Text>
				</View>

			</View>
		);
	}

	return (

		<Container>
			
			<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
				<FontAwesome5 name='clipboard-list' size={30} color='#404040' />
				<Text style={{fontSize: 18, fontWeight: '700', marginLeft: 14, color: '#000'}}>Lista de Materiais</Text>
			</View>
			<ListItem/>
			<ListItem/>
			<ListItem/>
			<ListItem/>
			<ListItem/>
			<ListItem/>
			<View style={{marginTop: 25}}>
				<Text style={{fontSize: 18, color: '#008282', fontWeight: '700'}}>Frete Gratuito</Text>				
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 3}}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<MaterialIcons name="attach-money" size={28} color="black" />
					<Text style={{ fontWeight: '700', fontSize: 18}}>Valor total</Text>					
				</View>
				<Text style={{fontSize: 18, fontWeight: '700', color: '#00A725'}}>R$ {list.valueTotal}</Text>	
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 3, marginBottom: 40}}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<FontAwesome5 name="hand-holding-heart" size={28} color="black" />
					<Text style={{ fontWeight: '400', fontSize: 18, marginLeft: 2}}>Ainda Falta</Text>					
				</View>
				<Text style={{fontSize: 18, fontWeight: '700', color: '#008282'}}>R$ {list.valueSub}</Text>	
			</View>	
			<DonateButton>
				<DonateButtonText onPress={navigateToPayDonation}>
					Fazer doação
				</DonateButtonText>
			</DonateButton>
		</Container>
	);
}
