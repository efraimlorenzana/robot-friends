import React from 'react';
import ReactDOM from 'react-dom';
import '../css/clock.css';

const clock = () => {
	const element = (
			<h6>TIME : {new Date().toLocaleTimeString()}</h6>
		)
	return ReactDOM.render(element, document.getElementById('clock'));
}


setInterval(clock, 1000);
