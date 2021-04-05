import React from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle='Cadastro de crianças'>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>
		</Container>
	);
}
