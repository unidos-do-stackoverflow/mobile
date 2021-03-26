import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, InputFields, Footer } from './styles';
import RootStackParamList from '../../utils/RootStackParamList';
import { Avatar, TextInput, Button, Title } from 'react-native-paper';

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
	const [text, setText] = React.useState('d');

	function navigateToRegister() {
		navigation.navigate('Register');
	}

	return (
		<Container>
			<Avatar.Icon size={40} icon='account' />
			<Title>Acesse sua conta</Title>
			<InputFields>
				<TextInput
					label='E-mail'
					value={text}
					onChangeText={(text) => setText(text)}
					mode='outlined'
				/>
				<TextInput
					label='Senha'
					value={text}
					onChangeText={(text) => setText(text)}
					mode='outlined'
				/>
			</InputFields>

			<Button
				icon='login'
				mode='contained'
				onPress={() => console.log('Pressed')}
			>
				Fazer login
			</Button>

			<Footer>
				<Button icon='login' mode='contained' onPress={navigateToRegister}>
					Criar uma conta
				</Button>
			</Footer>
		</Container>
	);
}

const styles = StyleSheet.create({
	bottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
});
