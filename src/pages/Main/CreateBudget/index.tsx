import React, { useState } from 'react';
import {
	Container,
	Text,
	BoldText,
	MiddleContainer,
	AddChildButton,
	PostDescription,
	Row,
	Text1,
	Footer,
	NextButton,
	NextButtonText,
} from './styles';
import Header from '../../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function CreateBudget() {
	const navigation = useNavigation();

	function navigateToFeed() {
		navigation.navigate('TabsHome');
	}

	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle=''>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>

			<Text>Descrição do post</Text>
			<PostDescription
				multiline={true}
				numberOfLines={4}
				style={{ height: 200, textAlignVertical: 'top', padding: 10 }}
			/>
			<AddChildButton>
				<AntDesign name='camera' size={40} color='#005556' />
			</AddChildButton>
			<BoldText>Adicionar foto</BoldText>
			<Footer>
				<Row>
					<Text1>Loja Parceira</Text1>
					<Text1>Papelaria Castor</Text1>
				</Row>

				<Row>
					<Text1>Total de itens</Text1>
					<Text1>14</Text1>
				</Row>

				<Row>
					<Text1>Frete</Text1>
					<Text1>Gratuito</Text1>
				</Row>

				<Row>
					<Text1>Valor total</Text1>
					<Text1>R$ 39,34</Text1>
				</Row>

				<Row>
					<NextButton onPress={navigateToFeed}>
						<NextButtonText>PRÓXIMO</NextButtonText>
					</NextButton>
				</Row>
			</Footer>
		</Container>
	);
}
