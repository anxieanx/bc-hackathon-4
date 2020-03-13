import React, { Component } from 'react';

export default class CounterButton extends Component {

  render() {
  	const { value, handleClick } = this.props

    return (
    	<button onClick={handleClick}>{value}</button>
    );
  }
}
