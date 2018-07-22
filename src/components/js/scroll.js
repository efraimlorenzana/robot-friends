import React from 'react';
import '../css/scroll.css';

const scroll = props => {
	return (
		<div id="scroll">
			{props.children};
		</div>
	);
}

export default scroll;