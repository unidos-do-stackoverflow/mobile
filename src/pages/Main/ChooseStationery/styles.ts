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
`;

export const Pp = styled.TouchableOpacity`
	width: 100px;
	height: 100px;
	background-color: #ececec;
	align-items: center;
	justify-content: center;
`;

export const PpImg = styled.Image`
	width: 85px;
	height: 62.5px;
`;

export const PpName = styled.Text`
	margin-top: 5px;
	width: 100px;
	text-align: center;
`;

export const IndividualPpContainer = styled.View`
	align-items: center;
`;

export const PpRow = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 20px;
`;

export const PpContainer = styled.View`
	margin-top: 20px;
	width: 100%;
	justify-content: space-around;
`;

export const AddChildButton = styled.TouchableOpacity``;
