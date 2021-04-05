import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 50px;
	justify-content: space-between;
	align-self: center;
	align-items: center;
	padding: 24px 27px;
	width: 350px;
	height: 250px;
	background: #ffffff;
	border: 2px solid #008282;
	border-radius: 7px;
`;

export const ContainerCards = styled.View`
	display: flex;
	flex-direction: row;
`;

export const ContainerReceiver = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 27px;
	width: 140px;
	height: 150px;
	left: 0px;
	top: 0px;
	background: #ffffff;
	border: 1px solid #005556;
	border-radius: 7px;
	flex-grow: 0;
	margin: 0px 10px;
`;

export const Text = styled.Text`
	font-weight: bold;
	bottom: 10px;
	color: #005556;
	font-size: 20px;
`;

export const ContainerDonor = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 27px;
	width: 140px;
	height: 150px;
	left: 0px;
	top: 0px;
	background: #ffffff;
	border: 1px solid #005556;
	border-radius: 7px;
	flex-grow: 0;
	margin: 0px 10px;
`;
export const Description = styled.Text`
	top: 10px;
	font-size: 15px;
	text-align: center;
	color: #005556;
`;
