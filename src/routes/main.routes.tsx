import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Feather,
} from '@expo/vector-icons';

import TestScreen from '../pages/Main/TestScreen';
import Screen1 from '../pages/Main/Screen1';
import Feed from '../pages/Main/Feed';
import Donation from '../pages/Main/Donation';

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
