import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';

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
		accent: 'blue',
	},
};

setStatusBarBackgroundColor('#3bb273', true);

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView
				style={{
					flex: 1,
				}}
			>
				<AuthProvider>
					<NavigationContainer>
						<PaperProvider theme={theme}>
							<Routes />
						</PaperProvider>
					</NavigationContainer>
				</AuthProvider>
			</SafeAreaView>
			<StatusBar style='light' />
		</SafeAreaProvider>
	);
}
