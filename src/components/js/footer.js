import React from 'react';
import '../css/footer.css';

class footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<p>
					<i className="fas fa-code"></i> 
					 with 
					<i className="fas fa-heart"></i>
					by Efraim A. Lorenzana &copy; 2018 All Rights Reserved
				</p>
				<hr />
				<p>Powered By</p>
				<p>
					<i className="fab fa-react fa-2x"></i>
				</p>
				<p>React Technologies</p>
			</footer>
		);
	}
}

export default footer;