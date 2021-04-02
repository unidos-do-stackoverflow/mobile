import React, { useState, useEffect } from 'react';
import { Text, Avatar } from 'react-native-paper';
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
	DonationContainer,
	DonationDueDateContainer,
	DonationDueDateText,
	DonationProgressContainer,
	DonationProgressBar,
	ProgressFill,
	DonationProgressText,
	PostFooter,
	ReactionsContainer,
	CommentsContainer,
	CommentsText,
	ReactionEmoji,
	ReactionEmojiCount,
	EmojiWrapper,
} from './styles';
import Tag from './Tag';

import BoyStudying from '../../../assets/boy-studying-1.jpg';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import IPostProps from './interfaces/IPostProps';

export default function Post({ username, content, date }: IPostProps) {
	const user = {
		name: username,
		photo: require('../../../assets/woman-1.jpg'),
		description:
			'Mãe de 3 filhos, 32 anos, procurando ajuda e adoiando quando posso',
		donation: [{ date: '1 mês', value: '200.00', receptor: 'Joana Carvalho' }],
	};

	interface IEmojiProps {
		whichEmoji: string;
	}

	function Emoji({ whichEmoji }: IEmojiProps) {
		const currentReactions = 12;
		const [reacted, setReacted] = useState(false);

		return (
			<EmojiWrapper reacted={reacted} onPress={() => setReacted(!reacted)}>
				<ReactionEmoji>️{whichEmoji}</ReactionEmoji>
				<ReactionEmojiCount>
					{reacted ? currentReactions + 1 : currentReactions}
				</ReactionEmojiCount>
			</EmojiWrapper>
		);
	}

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
					<FontAwesome5 name='clipboard-list' size={20} color='#404040' />
				</PostList>
			</PostPictureContainer>

			<DonationContainer>
				<DonationDueDateContainer>
					<Feather name='calendar' size={20} color='#404040' />
					<DonationDueDateText>14/02</DonationDueDateText>
				</DonationDueDateContainer>

				<DonationProgressContainer>
					<DonationProgressBar>
						<ProgressFill />
					</DonationProgressBar>
					<FontAwesome5 name='hand-holding-heart' size={20} color='#404040' />
					<DonationProgressText>65%</DonationProgressText>
				</DonationProgressContainer>
			</DonationContainer>

			<PostFooter>
				<ReactionsContainer>
					<Emoji whichEmoji='❤️' />
					<Emoji whichEmoji='🎉' />
					<Emoji whichEmoji='🚶' />
				</ReactionsContainer>

				<CommentsContainer>
					<Ionicons name='chatbox-outline' size={20} color='#404040' />
					<CommentsText>12 comentários</CommentsText>
				</CommentsContainer>
			</PostFooter>
		</Container>
	);
}
