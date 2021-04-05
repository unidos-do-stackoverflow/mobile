import React, { useState } from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import Feed from '../pages/Main/Feed';
import Donation from '../pages/Main/Donation';
import Profile from '../pages/Main/Profile';

import Screen1 from '../pages/Main/Screen1';
import CreateChildren from '../pages/Main/CreateChildren';
import AddModalPost from '../components/AddPostModal';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function Routes() {
	const [isModalVisible, setModalVisibility] = useState(false);

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
					name='Criar post'
					component={CreateChildren}
					options={{
						tabBarButton: () => (
							<TouchableOpacity
								style={{ alignItems: 'center' }}
								onPress={() => setModalVisibility(!isModalVisible)}
							>
								<Ionicons
									name='add-circle'
									size={45}
									color='#008147'
									style={{
										width: 45,
										height: 45,
										alignContent: 'center',
									}}
								/>
							</TouchableOpacity>
						),
					}}
				/>

				<Tab.Screen
					name='Doação'
					component={Donation}
					options={{
						tabBarIcon: () => (
							<FontAwesome5 name='donate' size={24} color='white' />
						),
					}}
				/>
				<Tab.Screen
					name='Perfil'
					component={Profile}
					options={{
						tabBarIcon: () => (
							<FontAwesome name='user' size={24} color='white' />
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
			</Tab.Navigator>
			<Modal
				isVisible={isModalVisible}
				onBackdropPress={() => setModalVisibility(false)}
			>
				<AddModalPost />
			</Modal>
		</>
	);
}
