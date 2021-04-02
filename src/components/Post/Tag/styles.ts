import styled from 'styled-components/native';

interface TagContainerProps {
	type: string;
}

export const TagContainer = styled.View<TagContainerProps>`
	width: 74px;
	height: 36px;
	align-items: center;
	justify-content: center;
	text-align: center;
	border-radius: 7px;
	background-color: ${(props) => {
		switch (props.type) {
			case 'request':
				return '#dc3a3a';

			case 'donation':
				return '#51b679';

			default:
				return '#008282';
		}
	}};
`;

export const Text = styled.Text`
	color: #fff;
	font-weight: 700;
`;
