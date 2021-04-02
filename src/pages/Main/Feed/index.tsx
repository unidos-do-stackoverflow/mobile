import React from 'react';
import {
	Container,
	Header,
	HeaderTitle,
	LocationContainer,
	Location,
	IconTextWrapper,
} from './styles';
import Post from '../../../components/Post';
import { FlatList, ListRenderItem } from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import IPostProps from '../../../components/Post/interfaces/IPostProps';

export default function Feed() {
	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			username: 'Juliana Mazini',
			date: 20,
			content: `Meu pequeninho estudando...

Bom dia gente, me chamo Juliana Mazini, e estou precisando de ajuda para custear os estudos do meu filho. Por favor, se alguém puder colaborar, estou aceitando doações para poder custeá-lo, obrigada :)`,
		},

		{
			id: 'bd7acbae-c1b1-46c2-aed5-3ad53abb28ba',
			username: 'Juliana Mazini',
			date: 20,
			content: `Meu pequeninho estudando...

Bom dia gente, me chamo Juliana Mazini, e estou precisando de ajuda para custear os estudos do meu filho. Por favor, se alguém puder colaborar, estou aceitando doações para poder custeá-lo, obrigada :)`,
		},
	];

	const renderPost: ListRenderItem<IPostProps> = ({ item }) => {
		const { username, content, date } = item;
		return <Post username={username} content={content} date={date} />;
	};

	return (
		<Container>
			<Header>
				<HeaderTitle>Lápis e Borracha</HeaderTitle>
				<AntDesign
					name='search1'
					size={20}
					color='white'
					style={{ marginRight: 20 }}
				/>
			</Header>
			<LocationContainer>
				<IconTextWrapper>
					<Entypo name='location-pin' size={22} color='black' />
					<Location>Santos, SP</Location>
				</IconTextWrapper>
			</LocationContainer>

			<FlatList
				data={DATA}
				renderItem={renderPost}
				keyExtractor={(item) => item.id}
			/>
		</Container>
	);
}
