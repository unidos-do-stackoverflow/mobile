import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Title, Btn, BtnText } from './styles';

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
	function navigateToRegister() {
		navigation.navigate('Register');
	}

	return (
		<Container>
			<Btn onPress={navigateToRegister}>
				<BtnText>Criar uma nova conta</BtnText>
			</Btn>
		</Container>
	);
}
