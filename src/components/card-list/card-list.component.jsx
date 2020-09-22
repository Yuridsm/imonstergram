import React from 'react';

import { Container } from './card-list.style';
import { Card } from '../card/card.component';

export const CardList = props => {
	return <Container>
		{console.log(props)}
		{props.monsters.map(monster => (
			<Card key={ monster.id } monster={ monster } />
		))}
	</Container>
};
