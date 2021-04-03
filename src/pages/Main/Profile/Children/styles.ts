import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.View`
	padding-left:70px;
	padding-right:70px;
`;

export const Title = styled.View`
	font-size:30px;
	align-items:flex-start;
	font-weight: 900;
	color:#005556;
	margin-left:12px;
`;

export const Header = styled.View`
	flex-direction:row;
	alignItems:center;
	margin-top:50px;
`;


export const Description = styled.View`
	font-size:24px;
	color:#005556;
	font-weight: 700;
	margin-bottom:50px;
`;

export const List = styled.View`
	flex-direction:row;
	justify-content:space-between;
	margin-bottom:30px;
`;

export const ImageContent = styled.View`
	margin-top:125px;
`;

export const Avatar = styled.View`
	borderRadius:90px;
`;