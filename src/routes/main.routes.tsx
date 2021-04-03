import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	MaterialCommunityIcons,
	Ionicons,
	Feather,
} from '@expo/vector-icons';

import TestScreen from '../pages/Main/TestScreen';
import Screen1 from '../pages/Main/Screen1';
import Screen2 from '../pages/Main/Screen2';
import CreateChildren from '../pages/Main/CreateChildren';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
	return (
		<Tab.Navigator sceneAnimationEnabled={false}>
			<Tab.Screen
				name='Feed'
				component={Screen2}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='post' size={24} color='white' />
					),
				}}
			/>
			<Tab.Screen
				name=' '
				component={CreateChildren}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="add-circle" size={30} color='white' />
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
