import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Feather,
	FontAwesome,
} from '@expo/vector-icons';

import Feed from '../pages/Main/Feed';
import Donation from '../pages/Main/Donation';
import Profile from '../pages/Main/Profile';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
	return (
		<Tab.Navigator sceneAnimationEnabled={false}>
			<Tab.Screen
				name='Feed'
				component={Feed}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='post' size={24} color='white' />
					),
				}}
			/>
			<Tab.Screen
				name='Doação'
				component={Donation}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='donate' size={24} color='white' />
					),
				}}
			/>
			<Tab.Screen
				name='Perfil'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='user' size={24} color='white' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
