import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
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
	colors: {
		...DefaultTheme.colors,
		primary: '#fbc406',
		accent: 'red',
	},
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<Routes />
		</PaperProvider>
	);
}
