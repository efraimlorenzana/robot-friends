import React, { Component } from 'react';
import './App.css';
// import { robots } from './components/js/data.js';
import CardList from './components/js/cardlist';
import SearchBox from './components/js/search';
import Footer from './components/js/footer';
import './components/js/clock';
import Scroll from './components/js/scroll';

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
			//this.setState({robots: user})
	}
	searchOnChange = (e) => {
		this.setState({ searchTerm: e.target.value})
	}
	render() {
		const filterRobot = this.state.robots.filter(r => {
			return r.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
		})

		if(this.state.robots.length === 0) {
			return (<h1 className="loading">Loading ...</h1>)
		} else {
			return(
				<main id="mainApp" className="tc">
					<section id="main">
						<div id="header"><h1>Robot Friends</h1></div>
						<SearchBox eventChange={this.searchOnChange} />
						<Scroll>
							<CardList robots={ filterRobot } />
						</Scroll>
					</section>
					<Footer />
				</main>
			);
		}
	}
}

export default App;