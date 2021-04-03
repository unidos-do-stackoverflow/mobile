import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

import TestScreen from '../pages/Main/TestScreen';
import Screen1 from '../pages/Main/Screen1';
import Screen2 from '../pages/Main/Screen2';
import CreateChildren from '../pages/Main/CreateChildren';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function Routes() {
	return (
		<Tab.Navigator
			tabBarOptions={{ keyboardHidesTabBar: true, showLabel: false }}
		>
			<Tab.Screen
				name='Feed'
				component={Screen2}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='post' size={24} color='#4d4d4d' />
					),
				}}
			/>
			<Tab.Screen
				name='Criar post'
				component={CreateChildren}
				options={{
					tabBarButton: (props) => (
						<TouchableOpacity
							{...props}
							style={{
								bottom: 30, // space from bottombar
								height: 70,
								width: 70,
								borderRadius: 58,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Ionicons
								name='add-circle'
								size={60}
								color='#4d4d4d'
								style={{
									width: 60,
									height: 60,
									alignContent: 'center',
								}}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Tab.Screen
				name='Configurações'
				component={TestScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name='settings' size={24} color='#4d4d4d' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
