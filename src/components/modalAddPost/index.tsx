import React, { useState } from 'react';
import { Container, ContainerCards, ContainerReceiver, Text, ContainerDonor, Description } from './styles';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function ModalAddPost() {

	
	const [ visible, setVisible ] = useState(false)

	return (

        <Container>


			<Text>Escolha o que gostaria de fazer</Text>

			<ContainerCards>

				<ContainerReceiver >
					//TODO: trocar ícone
					<FontAwesome name="file" size={20} color="#005556" /> 
					<Description >Receber um material</Description>
				</ContainerReceiver>

				<ContainerDonor>
					<FontAwesome5 name="hand-holding-heart" size={40} color="#005556" />
					<Description>Doar um material</Description>
				</ContainerDonor>
			
			</ContainerCards>

		</Container>
    );
}
