import React, { useState } from 'react';
import { Avatar, TextInput } from 'react-native-paper';
import { Text } from 'react-native';
import {
	Container,
	ContainerDateOfBirth,
	ContainerGender,
	ContainerIcon,
	ContainerInput,
	Form,
	NextButton,
	NextButtonText,
} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../../components/Header';

export default function CreateChildren() {
	const [name, setName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [gender, setGender] = useState('');
	const [address, setAddress] = useState('');
	const [school, setSchool] = useState('');
	const [year, setYear] = useState('');

	return (
		<Container>
			<Header title='PEDIDO DE DOAÇÃO' subtitle='Cadastro de crianças'>
				<FontAwesome5 name='clipboard-list' size={24} color='#005556' />
			</Header>

			<Form>
				<ContainerIcon>
					<Avatar.Icon size={80} icon='account' />
				</ContainerIcon>

				<TextInput
					mode='outlined'
					label='Nome completo da criança'
					placeholder={'Digite a data'}
					value={name}
					onChangeText={(text) => setName(text)}
					style={{ width: '100%' }}
				/>

				<ContainerInput>
					<TextInput
						mode='outlined'
						label='Data de nascimento'
						placeholder={'Digite a data'}
						value={dateOfBirth}
						onChangeText={(text) => setDateOfBirth(text)}
						style={{ width: '60%' }}
					/>

					<TextInput
						mode='outlined'
						label='Sexo'
						placeholder={'F'}
						value={gender}
						onChangeText={(text) => setGender(text)}
						style={{ width: '40%' }}
					/>
				</ContainerInput>

				<TextInput
					mode='outlined'
					label='Endereço'
					placeholder={'Digite o endereço'}
					value={address}
					onChangeText={(text) => setAddress(text)}
					style={{ width: '100%' }}
				/>
				<TextInput
					mode='outlined'
					label='Escola'
					placeholder={'Selecione a escola'}
					value={school}
					onChangeText={(text) => setSchool(text)}
					style={{ width: '100%' }}
				/>
				<TextInput
					mode='outlined'
					label='Ano'
					placeholder={'Selecione o ano do EF/EM'}
					value={year}
					onChangeText={(text) => setYear(text)}
					style={{ width: '100%' }}
				/>

				<NextButton>
					<NextButtonText>PRÓXIMO</NextButtonText>
				</NextButton>
			</Form>
		</Container>
	);
}
