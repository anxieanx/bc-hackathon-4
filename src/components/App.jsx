import React, { Component } from 'react';
import './App.css';

import searchFlights from '../searchFlights.js';
import FlightList from './FlightList.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flights: []
		}
	}

	async componentDidMount() {
		const dataAll = await searchFlights();

		this.setState({
			flights: dataAll
		})
	}

  render() {
    return (
    	<>
    		<FlightList flights={this.state.flights} />
    	</>
    );
  }
}
