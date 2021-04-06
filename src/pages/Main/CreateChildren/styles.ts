import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0px 30px;
`;

export const ContainerIcon = styled.View`
	align-items: center;
`;

export const ContainerInput = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const ContainerDateOfBirth = styled.View`
	width: 100%;
`;

export const ContainerGender = styled.View`
	width: 100%;
`;

export const Form = styled.View`
	flex: 1;
	margin-top: 20px;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
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
