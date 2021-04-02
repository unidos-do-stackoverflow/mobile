import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { Container, Btn, BtnEnviar } from './styles';

interface Props {
	nameUser: string;
	count: number;
	file: string;
	content: string;
}

export default function Post({ nameUser, count, content }: Props) {
	const [like, setLike] = useState(0);
	const increment = () => {
		setLike(like + 1);
	};

	const allComents = [];
	const [comments, setComments] = useState('');
	const sumComments = () => {
		allComents.push(' ');
	};

	return (
		<Container>
			<Text>{nameUser}</Text>

			<Text style={styles.text}> Há {count} min</Text>

			<Text>{content}</Text>

			<Text style={styles.text}>{like}</Text>
			<Btn onPress={increment}>
				<Text>Apoiar</Text>
			</Btn>

			<TextInput value={comments} onChangeText={(text) => setComments(text)} />
			<BtnEnviar onPress={sumComments}>
				<Text>Enviar</Text>
			</BtnEnviar>
			<Text>{allComents.length} Comentários</Text>
		</Container>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
	},
	image: {
		height: 180,
		width: 180,
	},
});
