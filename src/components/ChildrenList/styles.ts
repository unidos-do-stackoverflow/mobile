import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #E5E5E5;
`;

export const Text = styled.Text`
	width: 231px;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;

export const TextBold = styled.Text`
	width: 231px;
	top: 18px;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
	font-weight: bold;
`;

export const ContainerIcon = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 40px;
`;

export const IconModal = styled.View`
	top: 80px;
`;

export const TextQuestion = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
    width: 215px;
    height: 18px; 
    left: 32px; 
    top: 163px;
	position: absolute;
`;

export const ContainerChildren = styled.View`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	top: 15px;
`;

export const Name = styled.Text`
	left: 2px;
	top: 5px;
`;

export const ContainerIconGrin = styled.View`
	left: 20px;
	top: 5px;
`

export const Question = styled.Text`
	display: flex;
	width: 100%;
	left: 5px;
	color: #005556;
	font-weight: bold;
	font-size: 15px;
`;
