import React, { useState } from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import Feed from '../pages/Main/Feed';
import Donation from '../pages/Main/Donation';
import Profile from '../pages/Main/Profile';

import Screen1 from '../pages/Main/Screen1';
import CreateChildren from '../pages/Main/CreateChildren';
import AddModalPost from '../components/AddPostModal';
import DonationRequest from '../pages/Main/DonationRequest';
import ComprovanteEscolar from '../pages/Main/ComprovanteEscolar';
import FotoComprovante from '../pages/Main/FotoComprovante';
import ChooseStationery from '../pages/Main/ChooseStationery';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Budget from '../pages/Main/Budget';

const Tab = createBottomTabNavigator();

// Internal Stack navigation
const MainStack = createStackNavigator();

export default function Routes() {
	const [isModalVisible, setModalVisibility] = useState(false);

	function _handleRequest() {
		setModalVisibility(false);
	}

	function TabsHome() {
		return (
			<>
				<Tab.Navigator
					tabBarOptions={{ keyboardHidesTabBar: true, showLabel: false }}
				>
					<Tab.Screen
						name='Feed'
						component={Feed}
						options={{
							tabBarIcon: () => (
								<MaterialCommunityIcons name='post' size={24} color='#4d4d4d' />
							),
						}}
					/>
					<Tab.Screen
						name='Doação'
						component={Donation}
						options={{
							tabBarIcon: () => (
								<FontAwesome5
									name='hand-holding-heart'
									size={24}
									color='#4d4d4d'
								/>
							),
						}}
					/>
					<Tab.Screen
						name='Criar post'
						component={Screen1}
						options={{
							tabBarButton: () => (
								<TouchableOpacity
									style={{ alignItems: 'center' }}
									onPress={() => setModalVisibility(true)}
								>
									<Ionicons
										name='add-circle'
										size={45}
										color='#008147'
										style={{
											width: 45,
											height: 45,
											alignContent: 'center',
											marginLeft: 10,
											marginRight: 10,
										}}
									/>
								</TouchableOpacity>
							),
						}}
					/>
					<Tab.Screen
						name='Configurações'
						component={Screen1}
						options={{
							tabBarIcon: () => (
								<Feather name='settings' size={24} color='#4d4d4d' />
							),
						}}
					/>
					<Tab.Screen
						name='Perfil'
						component={Profile}
						options={{
							tabBarIcon: () => (
								<FontAwesome name='user' size={24} color='#4d4d4d' />
							),
						}}
					/>
				</Tab.Navigator>
				<Modal
					isVisible={isModalVisible}
					onBackdropPress={() => setModalVisibility(!isModalVisible)}
				>
					<AddModalPost handleRequest={_handleRequest} />
				</Modal>
			</>
		);
	}

	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name='TabsHome'
				component={TabsHome}
				options={{ headerShown: false }}
			/>

			<MainStack.Screen
				name='DonationRequest'
				component={DonationRequest}
				options={{ headerShown: false }}
			/>

			<MainStack.Screen
				name='CreateChildren'
				component={CreateChildren}
				options={{ headerShown: false }}
			/>

			<MainStack.Screen
				name='ComprovanteEscolar'
				component={ComprovanteEscolar}
				options={{ headerShown: false }}
			/>

			<MainStack.Screen
				name='FotoComprovante'
				component={FotoComprovante}
				options={{ headerShown: false }}
			/>

			<MainStack.Screen
				name='Budget'
				component={Budget}
				options={{ headerShown: false }}
			/>

			<MainStack.Screen
				name='ChooseStationery'
				component={ChooseStationery}
				options={{ headerShown: false }}
			/>
		</MainStack.Navigator>
	);
}
