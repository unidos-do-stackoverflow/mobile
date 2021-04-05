import React from 'react';
import {
	Container,
	Text,
	BoldText,
	MiddleContainer,
	AddChildButton,
} from './styles';
import Header from '../../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Budget() {
	// const navigation = useNavigation();

	// function navigateToFotoComprovante() {
	// 	navigation.navigate('FotoComprovante');
	// }

	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle='Orçamento'>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>
		</Container>
	);
}
