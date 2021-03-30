import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, 
	ContainerHeader, 
	Title, 
	TextDesc,
	BottonEditarPerfil,
 } from './styles';
import { MaterialCommunityIcons, FontAwesome5, Feather} from '@expo/vector-icons';
import RootStackParamList from '../../../utils/RootStackParamList';
import { Button, Appbar, Avatar, Text } from 'react-native-paper';
import { useAuth } from '../../../context/auth';
import { State } from 'react-native-gesture-handler';

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
	//const { signOutUser } = useAuth();
	const user = {
		name: 'Anna Clara',
		photo: require('../../../../assets/Anna_Clara.jpg'),
		description: 'Mãe de 3 filhos, 32 anos, procurando ajuda e adoiando quando posso'
	};
	const goBack = ()=> console.log('back action');
	const config = ()=> console.log('settings');
	

	return (
		<Container>
			<Appbar.Header style={{justifyContent:'space-between', backgroundColor: '#fff'}}>
				<Appbar.BackAction style={{marginLeft: 10}} onPress={goBack}/>
				<Appbar.Action icon="cog" style={{marginRight: 10}} onPress={config}/>
			</Appbar.Header>
			<ContainerHeader>
				<Avatar.Image size={100} source={user.photo} style={{marginTop: 15}}/>
				<Title>{user.name}</Title>
				<TextDesc>{user.description}</TextDesc>
				<BottonEditarPerfil><Text style={{ color: '#808080', fontSize: 15, fontStyle: 'italic'}}>Editar perfil</Text></BottonEditarPerfil>
			</ContainerHeader>
			
		</Container>
	);
}
