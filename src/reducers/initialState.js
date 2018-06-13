const initialState = {
  cities: ['chicago', 'frankfurt', 'shanghai', 'new york', 'hong kong'], //making this dynamic would allow to show any cities
  weatherObjs: [],
  currentCity: '',
  relevantWeatherObj: {},
  forecastObj: {},
  units: 'f'
};

export default initialState;
