import React from 'react';
import '../css/card.css';

const card = ({robot}) => {
	const element = (
		<div id="card" className="dib card grow">
			<img src={`https://robohash.org/${robot.username}?50x50/`} alt="robohash.org"/>
			<div>
				<h4>{robot.name}</h4>
				<p>{robot.email}</p>
			</div>
		</div>
	)
	return (element);
}

export default card;