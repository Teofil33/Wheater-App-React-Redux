import axios from 'axios';
// npm install --save axios

//const API_KEY  = '1ae5187fb7a89bb2184917694ba7aeef';
const API_KEY  = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url     = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// Middlewares are functions that take the actions and depending on the actions
// type or the payload, middleware can choose to let the action pass through,
// console log it, or stop it before they reach any reducer
// All the actions we create flow through middleware and it can modify
// https://www.npmjs.com/package/redux-promise
// Our application state hold all the data and it includes stuff like our weather data
// we only change our application state through reducers and actions
// We need to create ActionCreator responsible for API request to go fetch our data

// Action flows enters middlewares -> Enteres Redux-Promise Middleware
// Does the action have a promise as a payload?
// If yes stop the payload, if No Let it go through -> Reducers
// If yes, After Promise resolves, create a new action and send it to reducers
