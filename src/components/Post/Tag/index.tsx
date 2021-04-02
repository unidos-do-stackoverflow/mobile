import React from 'react';
import { TagContainer, Text } from './styles';

interface TagProps {
	type: string;
	text: string;
}

export default function Tag({ type, text }: TagProps) {
	return (
		<TagContainer type={type}>
			<Text>{text}</Text>
		</TagContainer>
	);
}
