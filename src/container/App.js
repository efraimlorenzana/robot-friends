import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/js/cardlist';
import SearchBox from '../components/js/search';
import Footer from '../components/js/footer';
import '../components/js/clock';
import Scroll from '../components/js/scroll';
import { setSearchField, requestRobots } from '../redux/action';

const mapStateToProps = state => {
	return {
		searchTerm: state.searchRobots.searchTerm,
		robots: state.getRobots.robots,
		isPending: state.getRobots.isPending,
		error: state.getRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		searchOnChange: event => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}
	render() {
		const {searchTerm, searchOnChange, robots, isPending} = this.props;

		const filterRobot = robots.filter(r => {
			return r.name.toLowerCase().includes(searchTerm.toLowerCase());
		})

		return isPending ? <div className="loading"><img src={require('../assets/img/loading1.gif')} alt="load" /><div></div></div> : (
			<main id="mainApp" className="tc">
				<section id="main">
					<div id="header"><h1>Robot Friends2</h1></div>
					<SearchBox eventChange={searchOnChange} />
					<Scroll>
						<CardList robots={ filterRobot } />
					</Scroll>
				</section>
				<Footer />
			</main>
		);
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);