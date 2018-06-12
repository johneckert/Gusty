import initialState from './initialState';
import { GET_WEATHER_FAIL, GET_WEATHER_SUCCESS } from '../actions/actionTypes';

const defaultState = {
  cities: ['Copenhagen', 'Tokyo', 'Delhi', 'New York', 'Istanbul'], //making this dynamic would allow to show any cities
  weatherObjs: [],
  forecastObjs: {},
  units: 'f'
};

export default function cities(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return { ...state, weatherObjs: [...state.weatherObjs, action.payload] };
    case GET_WEATHER_FAIL:
      return { ...state, error: 'Weather Data Unavailable' };
    default:
      return state;
  }
}
