import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 15px;
	border-style: solid;
	border-top-width: 0.7;
	border-top-color: #b0c4de;
`;

export const PostHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 10px;
`;

export const UserInfo = styled.View`
	flex-direction: row;
`;

export const InputFields = styled.View`
	margin: 10px 0;
	height: 300px;
`;

export const Btn = styled.TouchableOpacity`
	color: white;
	font-size: 20px;
`;

export const BtnEnviar = styled.TouchableOpacity`
	color: white;
	font-size: 20px;
`;

export const Timestamp = styled.Text`
	font-size: 13px;
	color: #808080;
`;

export const PostDescription = styled.Text`
	font-size: 14px;
	margin-bottom: 20px;
`;

export const VerticalWrapper = styled.View``;

export const PostPicture = styled.Image`
	margin: 0px -15px; /* overrides 15px padding from parent component */
	width: auto;
	height: 350px;
`;
