import BASE_URL from './URL';

const APPID = process.env.APPID;

class ForecastData {
  static getForecast(cityName) {
    return fetch(`${BASE_URL}forecast?q=${cityName}&APPID=${APPID}&units=imperial`).then(res =>
      res.json()
    );
  }
}

export default ForecastData;
