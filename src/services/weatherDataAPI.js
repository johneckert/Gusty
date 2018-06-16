import BASE_URL from './URL.js';

class WeatherData {
  static getWeather(cityName) {
    return fetch(`${BASE_URL}weather?q=${cityName}&APPID=${process.env.APPID}&units=imperial`).then(
      res => res.json()
    );
  }
}

export default WeatherData;
