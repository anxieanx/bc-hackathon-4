import React, { Component } from 'react';

import Flight from './Flight.jsx';

export default class FlightList extends Component {
	
  render() {
    return (
      <div>
        {this.props.flights.map((item, i) => {
          return (
            <Flight item={item} key={i} />
          )
        })}
      </div>
    );
  }
}
