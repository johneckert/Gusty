import { BASE_URL, APPID } from './URL';

class ForecastData {
  static getForecast(cityName) {
    return fetch(`${BASE_URL}forecast?q=${cityName}&APPID=${APPID}&units=imperial`).then(res =>
      res.json()
    );
  }
}

export default ForecastData;
