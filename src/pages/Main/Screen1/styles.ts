import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #E5E5E5;
`;

export const ContainerTitle = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 0px;
	position: absolute;
	width: 204px;
	height: 26px;
	left: 34px;
	top: 74px;
`
export const TextTitle = styled.Text`
	color: #005556;
	font-family: Roboto;
	font-weight: bold;
	font-size: 20px;
`

export const ContainerDescription = styled.View`
	flex-direction: column;
`

export const Text = styled.Text`
	width: 231px;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`

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
`
