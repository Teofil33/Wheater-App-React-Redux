import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <SearchBar />
      </div>
    );
  }
}
