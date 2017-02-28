import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div className="col-sm-8 col-sm-offset-2">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
