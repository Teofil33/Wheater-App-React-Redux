import React, { Component } from 'react';

class WeatherList extends Component {
  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}


// state.weather, because we set it up in index.js -> combineReducers
                      // state
function mapStateToProps({ weather }) {
  //const weather = state.weather
  // return { weather: state.weather };
  // return { weather: weather };
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
