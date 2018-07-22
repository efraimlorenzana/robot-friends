import React, { Component } from 'react';
import './App.css';
// import { robots } from './components/js/data.js';
import CardList from './components/js/cardlist';
import SearchBox from './components/js/search.js';
import Footer from './components/js/footer.js';
import './components/js/clock.js';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchTerm: ''
		}
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(user => this.setState({robots: user}));
	}
	searchOnChange = (e) => {
		this.setState({ searchTerm: e.target.value})
	}
	render() {
		const filterRobot = this.state.robots.filter(r => {
			return r.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
		})
		return(
			<main className="tc">
				<section id="main">
					<div id="header"><h1>Robot Friends</h1></div>
					<SearchBox eventChange={this.searchOnChange} />
					<CardList robots={ filterRobot } />
				</section>
				<Footer />
			</main>
		);
	}
}

export default App;