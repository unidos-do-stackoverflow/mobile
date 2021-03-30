import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container } from './styles';
import { MaterialCommunityIcons, FontAwesome5, Feather} from '@expo/vector-icons';
import RootStackParamList from '../../../utils/RootStackParamList';
import { Button, Appbar } from 'react-native-paper';
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
	const goBack = ()=> console.log('back action')
	const config = ()=> console.log('settings')

	return (
		<Container>
			<Appbar.Header style={{justifyContent:'space-between', backgroundColor: '#fff'}}>
				<Appbar.BackAction style={{marginLeft: 10}} onPress={goBack}/>
				<Appbar.Action icon="cog" style={{marginRight: 10}} onPress={config}/>

			</Appbar.Header>
			
		</Container>
	);
}
