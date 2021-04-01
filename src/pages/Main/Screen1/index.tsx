import React, { useState, useEffect } from 'react';
import { Container, Text } from './styles';


export default function Screen1() {

	const [children, setChildren] = useState([{} as any]);

	useEffect(() => {
		// requisição de API
		setChildren([
			{
				name: 'Maria',
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

		<Text>Pedido de doação</Text>
		<Text>{children[0].name}</Text>
		

	</Container>
	
	);
}
