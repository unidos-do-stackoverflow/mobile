import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { Container } from './styles';
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input';
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

	const BodyCard = ()=>{
		
		const [useLiteCreditCardInput, setUseLiteCreditCardInput] = React.useState(false);

		const _onChange = (formData:any) => console.log(JSON.stringify(formData, null, " "));
		const _onFocus = (field: any) => console.log("focusing", field);
		const _setUseLiteCreditCardInput = (useLiteCreditCardInput:any) => setUseLiteCreditCardInput(useLiteCreditCardInput);

		return(
			<View style={s.container}>
				
			{ useLiteCreditCardInput ?
			  (
				 <>
				</>
			  ) : (
				<CreditCardInput
				  autoFocus
	
				  requiresName
				  requiresCVC
				  requiresPostalCode
	
				  labelStyle={s.label}
				  inputStyle={s.input}
				  validColor={"black"}
				  invalidColor={"red"}
				  placeholderColor={"darkgray"}
				  labels={{number: "NÚMERO DO CARTÃO", expiry: "VENC", cvc: "CVV"}}
				  onFocus={_onFocus}
				  inputContainerStyle={s.border}
				  onChange={_onChange} />
				  
			  )
			}
		  </View>
		);
	}

	return (
		<Container>
			<HeaderTitle/>
			<View style={{flex: 1}}>
				<BodyCard/>
			</View>
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
const s = StyleSheet.create({
	switch: {
	  alignSelf: "center",
	  marginTop: 20,
	  marginBottom: 20,
	},
	container: {
	  backgroundColor: "#F5F5F5",
	  marginTop: 30,
	},
	label: {
	  color: "black",
	  fontSize: 12,
	},
	input: {
	  fontSize: 16,
	  color: "black",
	},
	border: {
		borderColor: '#72E5A2',
		borderBottomWidth: 1,		
	}
  });
