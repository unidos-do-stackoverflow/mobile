import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

declare global {
	namespace ReactNativePaper {
		interface ThemeColors {
			myOwnColor: string;
		}

		interface Theme {
			myOwnProperty: boolean;
		}
	}
}

const theme = {
	...DefaultTheme,
	roundness: 2,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: '#fbc406',
		accent: 'red',
	},
};

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<PaperProvider theme={theme}>
					<Routes />
				</PaperProvider>
			</NavigationContainer>
		</AuthProvider>
	);
}
