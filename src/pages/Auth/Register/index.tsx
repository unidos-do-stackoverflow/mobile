import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Title, Btn, BtnText } from './styles';
import RootStackParamList from '../../../utils/RootStackParamList';

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;
type RegisterScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Register'
>;

type Props = {
	route: RegisterScreenRouteProp;
	navigation: RegisterScreenNavigationProp;
};

export default function Register({ navigation, route }: Props) {
	function navigateToLogin() {
		navigation.navigate('Login');
	}

	return (
		<Container>
			<Title>[Tela de Cadastro]</Title>
			<Btn onPress={navigateToLogin}>
				<BtnText>Já tenho cadastro</BtnText>
			</Btn>
		</Container>
	);
}
