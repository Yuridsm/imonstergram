import React from 'react';

import { Container } from './header.style';

export const Header = (props) => {
	return (
		<Container>
			<h1>{ props.title }</h1>
		</Container>
	);
}
