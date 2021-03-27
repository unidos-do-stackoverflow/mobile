import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackParamList from '../utils/RootStackParamList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TestScreen from '../pages/Main/TestScreen';
import Screen2 from '../pages/Main/Screen2';
import Screen1 from '../pages/Main/Screen1';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Tela 1' component={Screen1} />
			<Tab.Screen name='Tela 2' component={Screen2} />
			<Tab.Screen name='Tela 3' component={TestScreen} />
		</Tab.Navigator>
	);
}
