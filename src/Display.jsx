import React, { Component } from 'react';

export default class Display extends Component {

  render() {
  	const {count} = this.props;
  	
    return (
    	<h2>{count}</h2>
    );
  }
}
