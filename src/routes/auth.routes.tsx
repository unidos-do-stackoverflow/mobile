import React from 'react';
import RootStackParamList from '../utils/RootStackParamList';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name='Register'
				component={Register}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
