const initialState = {
  // cities: ['Copenhagen', 'Tokyo', 'Delhi', 'New York', 'Istanbul'], //making this dynamic would allow to show any cities
  cities: ['chicago', 'frankfurt', 'shanghai', 'new york', 'hong kong'],
  weatherObjs: [],
  currentCity: '',
  relevantWeatherObj: {},
  forecastObj: {},
  units: 'f'
};

export default initialState;
