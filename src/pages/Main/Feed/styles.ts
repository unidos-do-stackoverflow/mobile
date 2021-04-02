import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
`;

export const Header = styled.View`
	background-color: #3bb273;
	width: 100%;
	height: 50px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: whitesmoke;
	margin-left: 20px;
`;

export const LocationContainer = styled.View`
	background-color: #f6f6f6;
	width: 100%;
	height: 37px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const IconTextWrapper = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100px;
	margin-left: 12px;
`;

export const Location = styled.Text`
	font-size: 12px;
	font-weight: 400;
	color: black;
	margin-left: 5px;
`;
