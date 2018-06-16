# GUSTY WEATHER APP

url - link

Gusty shows the weather in 5 different cities around the world. From the main page a user can get a quick overview of each city, or click on a city for more detailed information including a 5 day forecast.

Gusty was designed with scalability in mind. Adding more cities is as easy as adding their names to the initial state and creating skyline images for them.

## Features

### Index Page

- The temperature value and icon are updated by the API.

- The background color of each city's panel changes based on current weather.

  - Orange - clear day
  - Light Blue - cloudy day
  - Light Green - rainy day
  - Light Grey - snowy or misty day
  - Light Purple - clear night
  - Dark Grey - cloudy night
  - Dark Purple - rainy night
  - Purple/Grey - snowy or misty night

### City Page

- The top panel functions similarly to the index.

- The middle panel renders the 5 day forecast in 3 hour with data received from the API. Clicking the arrow buttons allows the user to scroll through the forecast.

- The bottom panel shows more in depth weather information calculated from data received by the API.

## Built With

- React
- React Router
- Redux

## Contributions

No contributions please.
