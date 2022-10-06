import React, { Component } from 'react';

class Filter extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  // onFilter = e => {
  //   this.setState({ filter: e.target.value });
  // };

  resetFilter = () => {
    this.setState({
      filter: '',
    });
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input type="name" name="find"></input>
      </label>
    );
  }
}

export default Filter;
