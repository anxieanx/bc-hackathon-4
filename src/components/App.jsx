import React, { Component } from 'react';
import './App.css';

import { Spinner } from 'reactstrap';

import searchFlights from '../searchFlights.js';
import FlightList from './FlightList.jsx';

const origins = {
	Prague: "PRG",
	Berlin: "BER",
	Warsaw: "WAW",
	Pardubice: "PED"
}

const destinations = {
	Valencia: "VLC",
	Barcelona: "BCN",
	Madrid: "MAD",
	Zagreb: "ZAG",
	Athens: "ATH"
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flights: [],
			spinner: true,
			origin: "PRG",
			destination: "VLC"
		}
	}

	componentDidMount() {
		this.getFlight();
	}

	onOriginClick = (event) => {
		const val = event.target.innerText;
		console.log("click", val, origins[val]);
		this.setState({
			origin: origins[val]
		})
	}

	getFlight = async () => {
		const dataAll = await searchFlights(this.state.origin, this.state.destination);

		this.setState({
			flights: dataAll,
			spinner: false
		})
	}

  render() {
  	let loadingBtn =  "";
  	if(this.state.spinner) {
  		loadingBtn = <Spinner color="secondary" />;
  	}

    return (
    	<>
    		{loadingBtn}

    		<FlightList flights={this.state.flights} onOriginClick={this.onOriginClick} />
    	</>
    );
  }
}
