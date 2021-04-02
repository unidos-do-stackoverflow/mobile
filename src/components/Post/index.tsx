import React, { useState } from 'react';
import { Text, TextInput, Avatar } from 'react-native-paper';
import {
	Container,
	Timestamp,
	UserInfo,
	PostHeader,
	PostDescription,
	VerticalWrapper,
	PostPictureContainer,
	PostPicture,
	PostList,
} from './styles';
import Tag from './Tag';

import BoyStudying from '../../../assets/boy-studying-1.jpg';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
	username: string;
	content: string;
	date: number;
}

export default function Post({ username, content, date }: Props) {
	const user = {
		name: username,
		photo: require('../../../assets/woman-1.jpg'),
		description:
			'Mãe de 3 filhos, 32 anos, procurando ajuda e adoiando quando posso',
		donation: [{ date: '1 mês', value: '200.00', receptor: 'Joana Carvalho' }],
	};

	return (
		<Container>
			<PostHeader>
				<UserInfo>
					<Avatar.Image
						size={43}
						source={user.photo}
						style={{ marginRight: 10 }}
					/>
					<VerticalWrapper>
						<Text style={{ fontWeight: '700', fontSize: 18 }}>{username}</Text>
						{/* TODO: fazer tratamento da timestamp passada aqui */}
						<Timestamp>há {date} min</Timestamp>
					</VerticalWrapper>
				</UserInfo>
				<Tag type='request' text='Pedido' />
			</PostHeader>
			<PostDescription>{content}</PostDescription>
			<PostPictureContainer>
				<PostPicture
					source={BoyStudying}
					style={{ resizeMode: 'cover' }}
				></PostPicture>
				<PostList>
					<FontAwesome5 name='clipboard-list' size={24} color='#404040' />
				</PostList>
			</PostPictureContainer>
		</Container>
	);
}
