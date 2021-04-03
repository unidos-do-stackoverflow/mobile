import React, { useEffect, useState } from 'react';
import { CheckBox, View, Image, Button, Modal, Text} from 'react-native';
import Header from '../header';
import ModalAddPost from '../modalAddPost';
import { Container, TextQuestion, ContainerChildren, Name, Question, ContainerIconGrin } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import ChildrenCreate from '../ChildrenCreate';
import { Checkbox } from 'react-native-paper';

//TODO: alinhar checkbox, trocar o ícone pela foto e integrar API e fazer rota do modal.

export default function ChildrenList(props: any) {
	const [ visible, setVisible ] = useState(false);
	const [checked, setChecked] = useState(false);
	const [children, setChildren] = useState([{} as any]);

	useEffect(() => {
		// requisição de API
		setChildren([
			{
				name: 'Maria de Souza',
				photo: 'http//...'
			},
			{
				name: 'João',
				photo: 'http//...'
			}
		]) 
	}, [])

	return (

	<Container>

		<Header />
			
			<TextQuestion>

				<View>
					<Question>Quem está recebendo material?</Question>
				</View>

				<ContainerChildren>
				<Checkbox color={'#005556'}status={checked ? 'checked' : 'unchecked'} onPress={() => {
						setChecked(!checked)
					}} />
					<Name>{props.children[0].name}</Name>
					<ContainerIconGrin>
						<FontAwesome5 name="grin-beam" size={24} color="black" />
					</ContainerIconGrin>
				</ContainerChildren>
            	
			</TextQuestion>

			<Modal visible={visible} transparent={true}>
				<View>
					<ModalAddPost/>
				</View>

			</Modal> 

			<View>
		    	<Button title='Modal' onPress={() => props.setVisible(true)}>Modal</Button>
		    </View> 
		
		</Container>
    );

}


