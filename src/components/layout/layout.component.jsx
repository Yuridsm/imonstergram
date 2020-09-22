import React from 'react';

import { Container } from './layout.style';

export const Layout = props => {
	return (
		<Container>
			{props.children}
		</Container>
	);
};
