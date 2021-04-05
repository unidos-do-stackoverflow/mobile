import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, DonateButton, DonateButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { Switch } from 'react-native-paper';

export default function PayDonation() {
	const navigation = useNavigation();
	const [selectPay, setSelecPay] = useState('')
	const [valueDonation, setValueDonation] = useState('');
	function onChange (value:any){
			setValueDonation(value);
	};

	function navigateToPayDonation2() {
		navigation.navigate('PayDonation2');
	}

	const MySwitche = () => {
		const [isSwitchOn, setIsSwitchOn] = React.useState(false);
	  
		const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
	  
		return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#72E5A2'/>;
	  };
	  



	const HeaderTitle = ()=>{
		return(
			<View style={{padding: 30, marginTop: 20}}>
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
			<View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 20, marginBottom: 100, marginTop: 30}}>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
					<Text style={{fontSize: 30, marginRight: 10}}>R$</Text>
						<TextInput
							style={{maxWidth: 150, fontSize: 30}}
							keyboardType = 'decimal-pad'
							//onChangeText = {(text)=>setValueDonation(text)}
							//value = {valueDonation}
							value = '0.00'
						/>				
				</View>
				<DropDownPicker
					items={[
						{label: 'Cartão de Debito', value: 'cd'},
						{label: 'Cartão de Credito', value: 'cc'},
						{label: 'PIX', value: 'pix'},
					]}
					defaultValue = {selectPay}
					containerStyle={{height: 40, width: 250}}
					style={{borderStartColor: '#fff'}}
					itemStyle={{justifyContent: 'flex-start'}}
					dropDownStyle={{backgroundColor: '#fff'}}
					//onChangeItem={(item) => setSelecPay(item)}
					placeholder = 'Escolha Forma de Doação'
				/>
				<View	style={{ flexDirection: 'row', marginTop: 30}}>
					<Text style={{fontSize: 16, fontWeight: '700'}}>Doação Anônima</Text>
					<MySwitche/>

				</View>

			</View>
		);
	}

	return (
		<Container>
			<HeaderTitle/>
			<Body/>
			<TouchableOpacity onPress={navigateToPayDonation2}>
				<Text style={{textAlign: 'right', fontWeight: '700',fontSize: 18, color: '#005556', marginRight: 40}}>PRÓXIMO</Text>
			</TouchableOpacity>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={{flexDirection: 'row', marginTop: 30, marginBottom: 20}}>
					<View style={{width: 15, height: 15, backgroundColor: '#005556', borderRadius: 7, marginRight: 8}}></View>
					<View style={{width: 15, height: 15, backgroundColor: '#C4C4C4', borderRadius: 7, marginRight: 8}}></View>
					<View style={{width: 15, height: 15, backgroundColor: '#C4C4C4', borderRadius: 7}}></View>
				</View>
			</View>
		</Container>
	);
}
