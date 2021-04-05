import React, { ReactChild, ReactChildren } from 'react';
import { Container, Title, Subtitle, TitleIconWrapper } from './styles';

interface HeaderProps {
	title: string;
	subtitle: string;
	children: ReactChild | ReactChildren;
}

export default function Header({ title, subtitle, children }: HeaderProps) {
	return (
		<Container>
			<TitleIconWrapper>
				{children}
				<Title>{title}</Title>
			</TitleIconWrapper>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
}
