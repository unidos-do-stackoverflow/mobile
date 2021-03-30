import React from 'react';
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { Container, Btn } from './styles';


export default function Post() {
	const [like, setLike] = React.useState(0);
	const increment = () => {
		setLike(like+1)
	}
	return <Container>
		<Text style={styles.text}>{like}</Text>
		<Btn onPress={increment}>
			<Text>Apoiar</Text>
		</Btn>
	</Container>;
}

const styles = StyleSheet.create({
	text:{
		fontSize:26,
	}
});