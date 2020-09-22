import React from 'react';

import { Container } from './search-box.style';

export const SearchBox = ({ placeholder, handleChange }) => (
	<Container
		placeholder={placeholder}
		onChange={handleChange}
	/>
);
