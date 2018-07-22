import React from 'react';
import Card from './card';

const Cardlist = ({robots}) => {
	return (
		<div id="cardlist">
			{
				robots.map((x,i) => <Card key={i} robot={ robots[i] } />)
			}
		</div>
	);
}

export default Cardlist;