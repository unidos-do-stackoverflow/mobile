import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, ProgressBar, Colors } from 'react-native-paper';
import { 
	Container,
	Header,
	ContainerRewards,
	LogoService,
 } from './styles';
 import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function index() {
		// Gift Card of conponet's

		const ComponentGiftCard = ()=>{
			return (

				<View style={styles.BoxGiftStyle}>
					<View style={{flexDirection: 'row', marginBottom: 15}}>
						<LogoService>
							<MaterialCommunityIcons name="netflix" size={40} color="#fff" />
						</LogoService>
						<View style={{width: 180, marginLeft: 10}}>
							<Text style={{fontSize: 18, fontWeight: '700'}}>
								2 meses Netflix
							</Text>
							<Text style={{fontSize: 11, fontWeight: '400'}}>
								Dá para ver todas as temporadas de
								sua série inteira em 2 meses!
							</Text>
						</View>											
					</View>
					<View style={{flexDirection: 'row', position: 'absolute', bottom: 15, right: 15}}>
						<FontAwesome5
								name="coins"
								size={24}
								color="#F1C40F"
						/>
						<Text style={{fontWeight:"700", marginLeft: 4}}>x1000 pts</Text>
					</View>
				</View>
			);
		}
	

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
			<ContainerRewards>
				<Text
					style={{fontSize: 18, fontWeight: '800'}}
				>
					Gift Cards 					
				</Text>
				<SafeAreaView>
					<ScrollView>
							<ComponentGiftCard/>
					</ScrollView>
				</SafeAreaView>

			</ContainerRewards>
			
		</Container>
	);
}

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	BoxGiftStyle:{
		paddingHorizontal: 15,
		paddingVertical: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		backgroundColor: '#F0F3F4',
		padding: 10,
		borderRadius: 14,
		borderBottomWidth: 4,
		borderBottomColor: '#979A9A',
		borderStyle: 'solid',
	},

	pad:{
		padding: 20,
	},



});


