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

export const PostPictureContainer = styled.View`
	position: relative;
`;

export const PostPicture = styled.Image`
	margin: 0px -15px; /* overrides 15px padding from parent component */
	width: auto;
	height: 350px;
`;

export const PostList = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	bottom: 20px;
	right: 0px;
	background-color: whitesmoke;
	position: absolute;
	border-radius: 7px;
	border-color: black;
	border-width: 1px;
`;

export const DonationContainer = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	height: 44px;
`;

export const DonationDueDateContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 60px;
`;

export const DonationDueDateText = styled.Text`
	font-size: 14px;
`;

export const DonationProgressContainer = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 210px;
	/* background-color: red; */
`;

export const DonationProgressText = styled.Text`
	font-size: 14px;
`;

export const DonationProgressBar = styled.View`
	width: 130px;
	height: 8px;
	background-color: #afafaf;
	border-radius: 4px;
`;

export const ProgressFill = styled.View`
	width: 100px;
	height: 8px;
	background-color: #3bb273;
	border-radius: 4px;
`;
