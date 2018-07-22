import React, { Component } from 'react';

class errorHandler extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch() {
		this.setState({hasError: true});
	}

	render() {
		if(this.state.hasError) {
			return (
				<div className="loding">
					<h1><strong>Oops !!! </strong> Something went wrong</h1>
					<p>please contact administrator : <em>efraim.lorenzana@gmail.com</em></p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default errorHandler;