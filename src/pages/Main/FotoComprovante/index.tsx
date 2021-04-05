import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import { Container, Button } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null as any);
	const [type, setType] = useState(Camera.Constants.Type.back);

	const navigation = useNavigation();

	function navigateToBudget() {
		navigation.navigate('Budget');
	}

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<Container>
			<Camera style={styles.camera} type={type}></Camera>
			<Button onPress={navigateToBudget}></Button>
		</Container>
	);
}

const styles = StyleSheet.create({
	camera: {
		flex: 1,
	},
});
