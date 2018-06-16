import BASE_URL from './URL';

//normally I would hide the API key, but I was having difficulty with heroku's config vars for some reason

class WeatherData {
  static getWeather(cityName) {
    return fetch(
      `${BASE_URL}weather?q=${cityName}&APPID=c49db1b5fc6a2f4f7a4dcc5c435bf737&units=imperial`
    ).then(res => res.json());
  }
}

export default WeatherData;
