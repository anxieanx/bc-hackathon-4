import React, { Component } from 'react';
import { DateTime } from 'luxon';

export default class Flight extends Component {
	
  render() {
    console.log(this.props);
    const { item } = this.props;

    return (
      <div className="flight__item">
        <div className="flight__departure">
          <h2>From: {item.cityFrom}</h2>
          <div>Airport: {item.flyFrom}</div>
          <div>Departure: {item.dTime}</div>
        </div>
        
        <div className="flight__arrival">
          <h2>To: {item.cityTo}</h2>
          <div>Airport: {item.flyFrom}</div>
          <div>Arrival: {item.aTime}</div>
        </div>

        <div className="flight__price">Price: {item.price}</div>
      </div>
    );
  }
}
