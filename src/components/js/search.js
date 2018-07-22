import React from 'react';
import '../css/search.css';

const searchRobot = ({eventChange}) => {
	return (
		<div id="search">
			<span id="search">
				<i className="fas fa-search"></i>
				<input type="text" 
					placeholder="Search Robot Friends" 
					onChange={eventChange}
				/>
			</span>
		</div>
	);
}

export default searchRobot;