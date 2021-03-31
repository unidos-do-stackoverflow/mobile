import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, 
	ContainerHeader, 
	Title, 
	TextDesc,
	BottonEditarPerfil,
	ContainerNum,
	Box,
	ContainerAction,
	BoxAction,
	Btn,
 } from './styles';
import { MaterialCommunityIcons, FontAwesome5, Feather, MaterialIcons, AntDesign} from '@expo/vector-icons';
import RootStackParamList from '../../../utils/RootStackParamList';
import { Button, Appbar, Avatar, Text, Divider } from 'react-native-paper';
import { useAuth } from '../../../context/auth';
import { ScrollView, State } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Login'
>;

type Props = {
	route: LoginScreenRouteProp;
	navigation: LoginScreenNavigationProp;
};

	

export default function Login({ route, navigation }: Props) {
	const { signOutUser } = useAuth();
	const [numOfFriends, setNumOfFriends] = React.useState('53');
	const [numOfDonations, setnumOfDonations] = React.useState('5');
	const [numOfHelp, setnumOfHelp] = React.useState('2')
	const user = {
		name: 'Anna Clara',
		photo: require('../../../../assets/Anna_Clara.jpg'),
		description: 'Mãe de 3 filhos, 32 anos, procurando ajuda e adoiando quando posso'
	};
	// Actions Links
	const goBack = ()=> console.log('back action');
	const config = ()=> console.log('settings');
	const editPerfil = ()=> console.log ("editePerfil");
	const childs = ()=> console.log ('childs');
	const tickeds = ()=> console.log ('my tickeds');
	const trophy = ()=> console.log('my rewards');
	
	// Components for historic's user

	const ComponenteDonation = ()=>{
		return(
			<View style={{padding: 20, borderStyle: 'solid', borderTopWidth: 0.7, borderTopColor: '#B0C4DE'}}>
				<View style={{flexDirection: 'row', marginBottom: 5}}>
					<MaterialCommunityIcons name="hand-heart" size={36} color="black" style={{marginRight:8}} />
					<View>
						<Text style={{fontWeight:'700', fontSize: 18}}>Doação de R$ 25,00</Text>
						<Text style={{fontSize: 12, color: '#808080'}}>há 1 mês</Text>
					</View>
				</View>
				<Text>Doação para Fulano de Tal, para contribuir com a compra de materiais escolares.</Text>
			</View>
		);
	};


	

	return (
		<Container>
			<Appbar.Header style={styles.headerStyle}>
				<Appbar.BackAction style={{marginLeft: 10}} onPress={goBack}/>
				<Appbar.Action icon="cog" style={{marginRight: 10}} onPress={signOutUser}/>
			</Appbar.Header>
			<ContainerHeader>
				<Avatar.Image size={90} source={user.photo} style={{marginTop: 15}}/>
				<Title>{user.name}</Title>
				<TextDesc>{user.description}</TextDesc>
				<BottonEditarPerfil onPress={editPerfil}>
					<Text style={{ color: '#808080',
								   fontSize: 15, 
								   fontStyle: 'italic'}}>
						Editar perfil
					</Text>
				</BottonEditarPerfil>
			</ContainerHeader>
			<ContainerNum>
				<Box>
					<Text style={styles.infoStyle}>Doações</Text>
					<Text style={styles.numStyle}>{numOfDonations}</Text>
				</Box>
				<Box>
					<Text style={styles.infoStyle}>Amigos</Text>
					<Text style={styles.numStyle}>{numOfFriends}</Text>
				</Box>
				<Box>
					<Text style={styles.infoStyle}>Pedidos</Text>
					<Text style={styles.numStyle}>{numOfHelp}</Text>
				</Box>				
			</ContainerNum>
			<ContainerAction style={{}}>
				<Box>
					<Btn onPress={childs}>
						<BoxAction>
							<MaterialIcons name="child-care" size={36} color="#fff"  style={{textAlign: 'center',}}/>
						</BoxAction>
					</Btn>					
					<Text style={styles.textStyle}>Crianças</Text>
				</Box>
				<Box>
					<Btn onPress={tickeds}>
						<BoxAction>
							<MaterialCommunityIcons name="ticket-percent-outline" size={36} color="#fff" />
						</BoxAction>	
					</Btn>							
					<Text style={styles.textStyle}>Cupons</Text>
				</Box>
				<Box>
					<Btn onPress={trophy}>
						<BoxAction>
							<AntDesign name="Trophy" size={36} color="#fff" />
						</BoxAction>
					</Btn>					
					<Text style={styles.textStyle}>Reconpenças</Text>
				</Box>
			</ContainerAction>
			
			<SafeAreaView style={styles.safeViewStyle}>
				<ScrollView>
					<ComponenteDonation/>					
				</ScrollView>
			</SafeAreaView>
			
		</Container>
	);
}

const styles = StyleSheet.create({
	numStyle:{
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'center',	
	},
	infoStyle:{
		fontSize: 20,
		fontWeight:'700',
		color:'#696969',
		textAlign: 'center',
	},
	textStyle:{
		fontSize: 13,
		fontWeight: '700',
		textAlign: 'center',
	},
	safeViewStyle:{
		flex: 1,
		marginTop: 14,
	},
	headerStyle:{
		justifyContent:'space-between',
		backgroundColor: '#fff',
	},
})