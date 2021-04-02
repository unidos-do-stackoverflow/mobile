import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Feather,
} from '@expo/vector-icons';

import TestScreen from '../pages/Main/TestScreen';
import Post from '../pages/Main/Post';
import Screen1 from '../pages/Main/Screen1';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
	return (
		<Tab.Navigator sceneAnimationEnabled={false}>
			<Tab.Screen
				name='Feed'
				component={Screen1}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='post' size={24} color='white' />
					),
				}}
			/>
			<Tab.Screen
				name='Doação'
				component={Post}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='donate' size={24} color='white' />
					),
				}}
			/>
			<Tab.Screen
				name='Configurações'
				component={TestScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name='settings' size={24} color='white' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
