import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar, Colors } from 'react-native-paper';
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

	const BodyContent = ()=>{
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={styles.baseText}>Muito obrigado por acreditar</Text>
					<Text style={styles.baseTextBold}>que o futuro está nas mãos</Text>
					<Text style={styles.baseTextBold}>das crianças!</Text>					
				</View>
				<View style={{marginTop: 40, marginBottom: 20}}>
					<Image
						source={require('../../../../assets/concluido.png')}
						style={{width: 200, height: 180 }}
					/>
				</View>
				<View>
					<View style={{flexDirection: 'row'}}>
					   <Text style={styles.baseText}>Você ganhou <Text style={styles.baseTextBold}> 50 pontos </Text> com</Text>	
					</View>
					<Text style={styles.baseText}>sua doação</Text>
				</View>
				<View
						style={{justifyContent: 'flex-end', width: 300, marginTop: 20}}
					>
						<Text
							style={{fontSize: 16, color: '#005556', textAlign: 'right', marginBottom: 3}}
						>
							80 pts
						</Text>
						<ProgressBar 
							progress={0.35}
							color={Colors.green400}
							style={{backgroundColor: '#D0D3D4', height: 16, borderRadius: 7}}
						 />	
					
				</View>	
			</View>
		);
	}

	const Btn = ()=>{
		const goRewards = ()=> console.log("Go Rewards")
		return(
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity
					onPress={goRewards}
					style={{width: 280, height: 40, borderRadius: 8, backgroundColor: '#008282', justifyContent: 'center'}}
				>
					<Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>Veja suas recompensas</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<Container>
			<HeaderTitle/>
			<BodyContent/>
			<Btn/>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={{flexDirection: 'row', marginTop: 30, marginBottom: 20}}>
					<View style={{width: 15, height: 15, backgroundColor: '#005556', borderRadius: 7, marginRight: 8}}></View>
					<View style={{width: 15, height: 15, backgroundColor: '#005556', borderRadius: 7, marginRight: 8}}></View>
					<View style={{width: 15, height: 15, backgroundColor: '#005556', borderRadius: 7}}></View>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	baseText: {
		fontSize: 20,
		color: '#005556',
		textAlign: 'center',
	},
	baseTextBold: {
		fontSize: 20,
		color: '#005556',
		fontWeight: '700',
		textAlign: 'center'
	}
})

