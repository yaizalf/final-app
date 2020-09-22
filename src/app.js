// Show Date
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];

let todayDate = document.querySelector("#today");
todayDate.innerHTML = `${day}, ${hours}:${minutes}`;

// Search engine city & temp change
function newCity(event) {
  event.preventDefault();
  let userCity = document.querySelector("#city-input");

  let newLocation = document.querySelector("#location");
  newLocation.innerHTML = `${userCity.value}`;

  let apiKey = "940c8ed5f2cc9111c0cd74ba210060b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity.value}&units=metric`;

  function newData(response) {
    let temperature = Math.round(response.data.main.temp);

    let newTemp = document.querySelector("#temperature");
    newTemp.innerHTML = `${temperature}º`;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${response.data.main.humidity}%`;

    let description = document.querySelector("#description");
    description.innerHTML = `${response.data.weather[0].description}`;
    console.log(response);

    let windSpeed = document.querySelector("#wind");
    windSpeed.innerHTML = `${response.data.wind.speed} m/s`;

    let max_temp = Math.round(response.data.main.temp_max);
    let max = document.querySelector("#max");
    max.innerHTML = `↑${max_temp}`;
    let min_temp = Math.round(response.data.main.temp_min);
    let min = document.querySelector("#min");
    min.innerHTML = `↓${min_temp}`;

    //let icon = document.querySelector("#big-emoji");
    //icon.innerHTML = `${response.data.weather[0].icon}`;
  }
  axios.get(`${apiUrl}&appid=${apiKey}`).then(newData);
}
let searchButton = document.querySelector("#go-button");
searchButton.addEventListener("click", newCity);

// Current location & temp change
function changeData(response) {
  let currentLocation = document.querySelector("#location");
  currentLocation.innerHTML = `${response.data.name}`;
  let temp = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = `${temp}º`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;

  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].description}`;
  console.log(response);

  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `${response.data.wind.speed} m/s`;

  let max_temp = Math.round(response.data.main.temp_max);
  let max = document.querySelector("#max");
  max.innerHTML = `↑${max_temp}`;
  let min_temp = Math.round(response.data.main.temp_min);
  let min = document.querySelector("#min");
  min.innerHTML = `↓${min_temp}`;
}

function retrievePosition(position) {
  let apiKey = "940c8ed5f2cc9111c0cd74ba210060b2";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.c.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(changeData);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

// Forecast for user search

// Forecast for current location

// Celsius - Fahrenheit - IT WILL HAVE TO CHANGE!
let cels = 16;
let fahr = 60;

function celsTemp(event) {
  event.preventDefault();
  let h2 = document.querySelector("#temperature");
  h2.innerHTML = `${cels}º`;
}
let celsiusLink = document.querySelector("#cels-link");
celsiusLink.addEventListener("click", celsTemp);

function fahrTemp(event) {
  event.preventDefault();
  let h2 = document.querySelector("#temperature");
  h2.innerHTML = `${fahr}º`;
}
let fahrenheitLink = document.querySelector("#fahr-link");
fahrenheitLink.addEventListener("click", fahrTemp);
