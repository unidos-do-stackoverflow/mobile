import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container } from './styles';
import RootStackParamList from '../../../utils/RootStackParamList';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../context/auth';

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

	return (
		<Container>
			<Button icon='login' mode='contained' onPress={signOutUser}>
				Deslogar
			</Button>
		</Container>
	);
}
