import React, { Component } from 'react';

import Flight from './Flight.jsx';
import CityDropdown from './Dropdown.jsx';

const origins = ['Prague', 'Berlin', 'Warsaw', 'Pardubice'];
const destinations = ['Valencia', 'Barcelona', 'Madrid', 'Milano', 'Athens'];

export default class FlightList extends Component {
	
  render() {
    const { onOriginClick } = this.props;

    return (
      <>
        <CityDropdown label="Origin" cities={origins} handleItemClick={onOriginClick} />
        <CityDropdown label="Destination" cities={destinations} />
        
        <div>
          {this.props.flights.map((item, i) => {
            return (
              <Flight item={item} key={i} />
            )
          })}          
        </div>
      </>
    );
  }
}
