import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0px 30px;
`;

export const MiddleContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 0px 40px;
`;
export const Text = styled.Text`
	text-align: center;
	font-size: 20px;
	font-weight: bold;
`;
export const BoldText = styled.Text`
	text-align: center;
	margin-bottom: 10px;
	align-self: center;
`;

export const Text1 = styled.Text`
	font-weight: bold;
	color: #008282;
`;

export const PostDescription = styled.TextInput`
	width: 100%;
	height: 200px;
	border-radius: 7px;
	border-color: black;
	border-width: 1px;
	font-size: 14px;
`;

export const AddChildButton = styled.TouchableOpacity`
	margin-top: 40px;
	align-self: center;
`;

export const Row = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;

export const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	margin-bottom: 40px;
`;

export const NextButton = styled.TouchableOpacity`
	margin-top: 10px;
	width: 100%;
`;

export const NextButtonText = styled.Text`
	width: 100%;
	font-weight: bold;
	font-size: 15px;
	text-align: right;
	color: #005556;
`;
