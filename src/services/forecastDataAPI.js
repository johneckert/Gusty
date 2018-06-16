import BASE_URL from './URL';

class ForecastData {
  static getForecast(cityName) {
    return fetch(
      `${BASE_URL}forecast?q=${cityName}&APPID=${process.env.APP_ID}&units=imperial`
    ).then(res => res.json());
  }
}

export default ForecastData;
