import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart'

// React sparkline https://github.com/borisyankov/react-sparklines
// npm install --save react-sparklines

class WeatherList extends Component {
  renderWeather(cityData) {
    const name  = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="green" />
        </td>
        <td>
          <Chart data={humidities} color="black" />
        </td>
      </tr>
    );
  }

//   return (
//     <tr key={name}>
//       <td>{name}</td>
//       <td>
//         <Sparklines heigth={120} width={180} data={temps}>
//           <SparklinesLine color="blue" />
//         </Sparklines>
//       </td>
//     </tr>
//   );
// }

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
          {this.props.weather.map(this.renderWeather)}
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
