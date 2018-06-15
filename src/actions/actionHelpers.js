/////////////// HELPER METHODS /////////////////////////

//Build Current Weather

export const buildCurrentWeather = json => {
  const cityData = {
    id: json.id || '--',
    name: json.name || '--',
    time: calcLocalTime(json.dt) || '--',
    wind: `${direction(json.wind.deg)} ${Math.round(json.wind.speed)}` || '--',
    icon: parseIcon(json.weather[0].icon) || '--',
    color: parseColor(json.weather[0].icon) || '--',
    description: json.weather[0].description || '--',
    temp: Math.round(json.main.temp) || '--',
    pressure: Math.round(json.main.pressure / 33.863886666667) || '--', //convert hpa => inhg
    humidity: Math.round(json.main.humidity) || '--'
  };
  return cityData;
};

export const currentError = {
  id: 5,
  name: 'Data Unavailable',
  time: '--',
  wind: '--',
  icon: 'cloud',
  color: 'moon',
  description: '--',
  temp: '--',
  pressure: '--',
  humidity: '--'
};

//Build Forecast Objects

export const buildForecastObj = json => {
  const forecastObj = {};
  json.list.forEach(apiItem => {
    const forecastItem = buildForecastItem(apiItem);
    const date = getDayNum(apiItem);
    if (forecastObj[date]) {
      forecastObj[date].push(forecastItem);
    } else {
      forecastObj[date] = [];
      forecastObj[date].push(forecastItem);
    }
  });
  return forecastObj;
};

export const forecastError = { error: true };

//Build Forecast from data points by sorting into arrays by numeric day
const buildForecastItem = apiItem => {
  const forecastItem = {};
  forecastItem.hour = getHour(apiItem.dt_txt);
  forecastItem.day = getDayString(apiItem);
  forecastItem.icon = parseIcon(apiItem.weather[0].icon);
  forecastItem.description = apiItem.weather[0].description;
  forecastItem.temp = Math.round(apiItem.main.temp);
  return forecastItem;
};

//get local time in HH:MM format
const calcLocalTime = dt => {
  const localTime = new Date(dt);
  const hour = localTime.getHours();
  const min = localTime.getMinutes();
  if (hour > 12) {
    return `${hour - 12}:${min} pm`;
  } else if (hour === 0) {
    return `12:${min} am`;
  } else if (hour === 12) {
    return `12:${min} pm`;
  } else {
    return `${hour}:${min} am`;
  }
};

//calculate day name from dateTime
const getDayString = item => {
  const week = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const date = new Date(item.dt_txt);
  return week[date.getDay()];
};

//gets day number
const getDayNum = item => {
  const date = new Date(item.dt_txt);
  return date.getDate();
};

//calculate Hour from dateTime
const getHour = datetime => {
  const date = new Date(datetime);
  const hour = date.getHours();
  if (hour > 12) {
    return `${hour - 12} PM`;
  } else if (hour === 0) {
    return '12 AM';
  } else if (hour === 12) {
    return '12 PM';
  } else {
    return `${hour} AM`;
  }
};

//Calculate Wind Direction from degrees
const direction = w => {
  if (w >= 349 || w < 11) {
    return 'N';
  } else if (w >= 11 && w < 34) {
    return 'NNE';
  } else if (w >= 34 && w < 56) {
    return 'NE';
  } else if (w >= 56 && w < 79) {
    return 'ENE';
  } else if (w >= 79 && w < 101) {
    return 'E';
  } else if (w >= 101 && w < 124) {
    return 'ESE';
  } else if (w >= 124 && w < 146) {
    return 'SE';
  } else if (w >= 146 && w < 169) {
    return 'SSE';
  } else if (w >= 169 && w < 191) {
    return 'S';
  } else if (w >= 191 && w < 214) {
    return 'SSW';
  } else if (w >= 214 && w < 236) {
    return 'SW';
  } else if (w >= 236 && w < 259) {
    return 'WSW';
  } else if (w >= 259 && w < 281) {
    return 'W';
  } else if (w >= 281 && w < 304) {
    return 'WNW';
  } else if (w >= 304 && w < 326) {
    return 'NW';
  } else if (w >= 326 && w < 349) {
    return 'NNW';
  } else {
    return '--';
  }
};

//get correct svg name from API code
const parseIcon = icon => {
  switch (icon) {
    case '01d':
      return 'sun';
    case '01n':
      return 'moon';
    case '02d':
      return 'partSun';
    case '02n':
      return 'partMoon';
    case '03d':
      return 'cloud';
    case '03n':
      return 'cloud';
    case '04d':
      return 'cloud';
    case '04n':
      return 'cloud';
    case '09d':
      return 'rain';
    case '09n':
      return 'rain';
    case '10d':
      return 'heavyRain';
    case '10n':
      return 'heavyRain';
    case '11d':
      return 'thunderstorm';
    case '11n':
      return 'thunderstorm';
    case '13d':
      return 'snow';
    case '13n':
      return 'snow';
    case '50d':
      return 'mist';
    case '50n':
      return 'mist';
    default:
      return;
  }
};

//translate API weather code to className for background color
const parseColor = icon => {
  switch (icon) {
    case '01d':
      return 'sun';
    case '01n':
      return 'moon';
    case '02d':
      return 'day-clouds';
    case '02n':
      return 'night-clouds';
    case '03d':
      return 'day-clouds';
    case '03n':
      return 'night-clouds';
    case '04d':
      return 'day-clouds';
    case '04n':
      return 'night-clouds';
    case '09d':
      return 'day-rain';
    case '09n':
      return 'night-rain';
    case '10d':
      return 'day-rain';
    case '10n':
      return 'night-rain';
    case '11d':
      return 'day-rain';
    case '11n':
      return 'night-rain';
    case '13d':
      return 'day-snow';
    case '13n':
      return 'night-snow';
    case '50d':
      return 'day-snow';
    case '50n':
      return 'night-snow';
    default:
      return 'day-clouds';
  }
};
