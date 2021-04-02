import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, ProgressBar, Colors } from 'react-native-paper';
import { 
	Container,
	Header,
 } from './styles';
 import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

export default function index() {
	return (
		<Container>
			<Header>
				<View
				 style={styles.rowStyle}
				>
					<View 
						style={{
							flexDirection: 'row',
							marginTop: 20,
							alignItems: 'center',
							}}
					>
						<Ionicons
							 name="md-trophy-sharp"
						 	 size={35}
							 color="#fff"

						 />
						<Text
						 style={{fontSize: 18, fontWeight: '700', color: '#fff', marginLeft: 10}}
						 >
							 Recompensas							 
						</Text>
					</View>
					<View>
						<Avatar.Image
						size={40}
						source={require('../../../../../assets/Anna_Clara.jpg')}
						style={{marginTop: 20}}
						/>					
					</View>
				</View>
				<View>
					<View
						style={{
							flexDirection: 'row',
							marginTop: 20,
							alignItems: 'center',
							}}
					>
						<FontAwesome5
							name="coins"
							size={24}
							color="#fff"
						/>
						<Text 
							style={{fontSize: 12, fontWeight: '700', color: '#fff', marginLeft: 10}}
						>
							Créditos
						</Text>						
					</View>
					<View
						style={{justifyContent: 'flex-end'}}
					>
						<Text
							style={{fontSize: 12, color: '#fff', textAlign: 'right', marginBottom: 3}}
						>
							5675 pontos
						</Text>
						<ProgressBar 
							progress={0.63}
							color={Colors.cyan400}
							style={{backgroundColor: '#D0D3D4', height: 10, borderRadius: 7}} />	
					</View>
				</View>
			</Header>
		</Container>
	);
}

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});


