import APPID from './APIKey';
import BASE_URL from './URL';

class ForecastData {
  static getForecast(cityName) {
    return fetch(`${BASE_URL}forecast?q=${cityName}&APPID=${APPID}`).then(res => res.json());
  }
}

export default ForecastData;
