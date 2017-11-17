import React, { Component } from 'react';

class Bands extends Component {
  mappedBands = () => {
    return this.props.store.getState().bands.map(band => {
      return (<li> {band} </li>)
    })
  }

  render(){
    return (
      <div>
        {this.mappedBands()}
      </div>
    );
  }
};

export default Bands;
