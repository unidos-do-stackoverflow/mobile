import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 15px;
	border-style: solid;
	border-top-width: 0.7;
	border-top-color: #b0c4de;
	background-color: #ffffff;
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
	height: 320px;
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
	justify-content: flex-start;
	align-items: center;
	width: 45%;
`;

export const DonationDueDateText = styled.Text`
	font-size: 14px;
	margin-left: 7px;
`;

export const DonationProgressContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 55%;
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

export const PostFooter = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 5px;
	height: 30px;
`;

export const ReactionsContainer = styled.View`
	width: 50%;
	flex-direction: row;
`;

export const ReactionEmoji = styled.Text`
	font-size: 24px;
	margin-right: 3px;
`;

export const ReactionEmojiCount = styled.Text`
	font-size: 14px;
`;

interface EmojiWrapperProps {
	reacted: boolean;
}

export const EmojiWrapper = styled.TouchableOpacity<EmojiWrapperProps>`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 50px;
	margin-right: 3px;
	background-color: ${(props) => {
		if (props.reacted) {
			return '#6bc7c7';
		}

		return '#fff';
	}};
	border-radius: 3px;
`;

export const CommentsContainer = styled.View`
	width: 50%;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const CommentsText = styled.Text`
	font-size: 14px;
	margin-left: 7px;
`;
