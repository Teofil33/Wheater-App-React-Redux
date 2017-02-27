import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };

    // this which is our instance of SearchBar has a function onInputChange
    // bind that function to this which is SearchBar
    // and replace onInputChange with this new bound instance of this function
    // We are overwritting local method onInputChange
    this.onInputChange = this.onInputChange.bind(this);
  }

  // all DOM event handlers, like onChange, onClick, onHover, onScroll
  // come along with this event object
  // if you got a callback that makes reference to this, you need to bind it
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render () {
    return (
      <form className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
