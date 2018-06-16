import BASE_URL from './URL';

class WeatherData {
  static getWeather(cityName) {
    return fetch(
      `${BASE_URL}weather?q=${cityName}&APPID=${process.env.APP_ID}&units=imperial`
    ).then(res => res.json());
  }
}

export default WeatherData;
