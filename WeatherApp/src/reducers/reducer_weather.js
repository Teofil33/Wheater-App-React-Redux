import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // we create entirelly new array and add it to existing one
      // return state.concat[action.payload.data];
      return [ action.payload.data, ...state ];
  }
  //console.log('Action recieved', action)
  return state;
}
