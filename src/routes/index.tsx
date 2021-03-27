import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackParamList from '../utils/RootStackParamList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
	return (
		<>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name='Login' component={Login} />
					<Tab.Screen name='Register' component={Register} />
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}
