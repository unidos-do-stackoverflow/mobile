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

// Icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Feed() {
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
			<Post
				username={'Juliana Mazini'}
				content={`Meu pequeninho estudando ...
				Bom dia gente, me chamo Anna clara, e estou  precisando de ajuda para custear 
				os estudos do meu filho. Por favor, se alguém puder colaborar, estou aceintando 
				doações para poder custea-lo, obrigado :)`}
			/>
		</Container>
	);
}
