import React from 'react';
import {
	Container,
	Text,
	BoldText,
	MiddleContainer,
	AddChildButton,
	PpContainer,
	PpRow,
	Pp,
	IndividualPpContainer,
	PpName,
	PpImg,
} from './styles';
import Header from '../../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Papelaria1 from '../../../../assets/papelaria-1.png';
import Papelaria2 from '../../../../assets/papelaria-2.png';
import Papelaria3 from '../../../../assets/papelaria-3.png';
import Papelaria4 from '../../../../assets/papelaria-4.png';

export default function Budget() {
	const navigation = useNavigation();

	function navigateToCreateBudget() {
		navigation.navigate('CreateBudget');
	}

	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle='Orçamento'>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>
			<MiddleContainer>
				<Text>Escolha uma papelaria</Text>

				<PpContainer>
					<PpRow>
						<IndividualPpContainer>
							<Pp>
								<PpImg source={Papelaria1} style={{ resizeMode: 'cover' }} />
							</Pp>
							<PpName>Papelaria Santa Catarina</PpName>
						</IndividualPpContainer>

						<IndividualPpContainer>
							<Pp>
								<PpImg source={Papelaria2} style={{ resizeMode: 'cover' }} />
							</Pp>
							<PpName>Papelaria das Neves</PpName>
						</IndividualPpContainer>
					</PpRow>
					<PpRow>
						<IndividualPpContainer>
							<Pp>
								<PpImg source={Papelaria3} style={{ resizeMode: 'cover' }} />
							</Pp>
							<PpName>Papelaria Ju Store</PpName>
						</IndividualPpContainer>

						<IndividualPpContainer>
							<Pp onPress={navigateToCreateBudget}>
								<PpImg source={Papelaria4} style={{ resizeMode: 'cover' }} />
							</Pp>
							<PpName>Papelaria Castor</PpName>
						</IndividualPpContainer>
					</PpRow>
				</PpContainer>
			</MiddleContainer>
		</Container>
	);
}
