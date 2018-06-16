import { BASE_URL, APPID } from './URL';

class WeatherData {
  static getWeather(cityName) {
    return fetch(`${BASE_URL}weather?q=${cityName}&APPID=${APPID}&units=imperial`).then(res =>
      res.json()
    );
  }
}

export default WeatherData;
