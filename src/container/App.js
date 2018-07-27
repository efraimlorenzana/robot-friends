import React, { Component } from 'react';
import './App.css';
// import { robots } from './components/js/data.js';
import CardList from '../components/js/cardlist';
import SearchBox from '../components/js/search';
import Footer from '../components/js/footer';
import '../components/js/clock';
import Scroll from '../components/js/scroll';
import ErrorHandler from '../components/js/errorHandler';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchTerm: ''
		}
	}
	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then(response => response.json())
		// 	.then(user => this.setState({robots: user}));
			//this.setState({robots: user})
	}
	searchOnChange = (e) => {
		this.setState({ searchTerm: e.target.value})
	}
	render() {
		const {robots, searchTerm} = this.state;
		const filterRobot = robots.filter(r => {
			return r.name.toLowerCase().includes(searchTerm.toLowerCase());
		})

		return !robots.length ? <div className="loading"><img src={require('../assets/img/loading1.gif')} alt="load" /><div></div></div> : (
			<main id="mainApp" className="tc">
				<section id="main">
					<div id="header"><h1>Robot Friends</h1></div>
					<SearchBox eventChange={this.searchOnChange} />
					<Scroll>
						<ErrorHandler>
							<CardList robots={ filterRobot } />
						</ErrorHandler>
					</Scroll>
				</section>
				<Footer />
			</main>
		);
		
	}
}

export default App;