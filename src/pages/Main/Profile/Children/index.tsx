import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { Content, Title, Description, Header, List, ImageContent, Avatar } from './styles';

interface Props{
	childName:string;
}

export default function index({childName}:Props) {
	const childList = {
		name:childName
	};

	return (
		<View style={{backgroundColor:'#fff', flex:1}}>
			<Content>
				<Header>
				<MaterialIcons name="child-care" size={48} color="#005556" />
				<Title>
					<Text style={{color:"#005556", fontWeight:'bold'}}>CRIANÇAS</Text>
				</Title>
				</Header>
				<Description>
					<Text style={{color:"#005556", fontWeight:'400'}}>Gerencie o cadastro das crianças</Text>
				</Description>
				<View>
					<List>
						<Text>{childList.name='Maria de Souza'}</Text>
						<MaterialIcons name="account-circle" size={24} color="#005556" />
					</List>
					<List>
						<Text>{childList.name='Fernando de Souza'}</Text>
						<MaterialIcons name="account-circle" size={24} color="#005556" />
					</List>
					<List>
						<Text>{childList.name='Carlos de Souza'}</Text>
						<MaterialIcons name="account-circle" size={24} color="#005556" />
						
					</List>

					<ImageContent>
						<Image source={require('../../../../../assets/children1.jpg')}/>
					</ImageContent>
					

				</View>
				
			</Content>
		</View>
			
	);
}

const styles = StyleSheet.create ({
});