// Show Date
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];
let daythree = weekDays[now.getDay() + 2];
let dayfour = weekDays[now.getDay() + 3];
let dayfive = weekDays[now.getDay() + 4];
let daysix = weekDays[now.getDay() + 5];

let todayDate = document.querySelector("#today");
todayDate.innerHTML = `${day}, ${hours}:${minutes}`;

let day3 = document.querySelector("#day-3");
day3.innerHTML = `${daythree}`;
let day4 = document.querySelector("#day-4");
day4.innerHTML = `${dayfour}`;
let day5 = document.querySelector("#day-5");
day5.innerHTML = `${dayfive}`;
let day6 = document.querySelector("#day-6");
day6.innerHTML = `${daysix}`;

// Search engine city & temp change
function newCity(event) {
  event.preventDefault();
  let userCity = document.querySelector("#city-input");

  let newLocation = document.querySelector("#location");
  newLocation.innerHTML = `${userCity.value}`;

  let apiKey = "940c8ed5f2cc9111c0cd74ba210060b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity.value}&units=metric`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity.value}&units=metric`;

  function newData(response) {
    let temperature = Math.round(response.data.main.temp);

    let newTemp = document.querySelector("#temperature");
    newTemp.innerHTML = `${temperature}º`;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${response.data.main.humidity}%`;

    let description = document.querySelector("#description");
    description.innerHTML = `${response.data.weather[0].main}`;

    let windSpeed = document.querySelector("#wind");
    windSpeed.innerHTML = `${response.data.wind.speed} m/s`;

    let max_temp = Math.round(response.data.main.temp_max);
    let max = document.querySelector("#max");
    max.innerHTML = `↑${max_temp}`;
    let min_temp = Math.round(response.data.main.temp_min);
    let min = document.querySelector("#min");
    min.innerHTML = `↓${min_temp}`;
    //Icon
    let icon = document.querySelector("#icon");
    icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function ForecastData(response) {
    //Today
    let temperatureMaxToday = Math.round(response.data.list[0].main.temp_max);
    let maxToday = document.querySelector("#forecast-max-today");
    maxToday.innerHTML = `↑${temperatureMaxToday}º`;
    let temperatureMinToday = Math.round(response.data.list[0].main.feels_like);
    let minToday = document.querySelector("#forecast-min-today");
    minToday.innerHTML = `↓${temperatureMinToday}º`;
    let iconDay1 = document.querySelector("#icon-day-1");
    iconDay1.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
    );
    //Tomorrow
    let temperatureMaxTomorrow = Math.round(
      response.data.list[8].main.temp_max
    );
    let maxTomorrow = document.querySelector("#max-tomorrow");
    maxTomorrow.innerHTML = `↑${temperatureMaxTomorrow}º`;

    let temperatureMinTomorrow = Math.round(
      response.data.list[8].main.feels_like
    );
    let minTomorrow = document.querySelector("#min-tomorrow");
    minTomorrow.innerHTML = `↓${temperatureMinTomorrow}º`;
    let iconDay2 = document.querySelector("#icon-day-2");
    iconDay2.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png`
    );
    // Day 3
    let temperatureMaxDay3 = Math.round(response.data.list[16].main.temp_max);
    let maxDay3 = document.querySelector("#max-day-3");
    maxDay3.innerHTML = `↑${temperatureMaxDay3}º`;
    let temperatureMinDay3 = Math.round(response.data.list[16].main.feels_like);
    let minDay3 = document.querySelector("#min-day-3");
    minDay3.innerHTML = `↓${temperatureMinDay3}º`;
    let iconDay3 = document.querySelector("#icon-day-3");
    iconDay3.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png`
    );
    //Day 4
    let temperatureMaxDay4 = Math.round(response.data.list[24].main.temp_max);
    let maxDay4 = document.querySelector("#max-day-4");
    maxDay4.innerHTML = `↑${temperatureMaxDay4}º`;
    let temperatureMinDay4 = Math.round(response.data.list[24].main.feels_like);
    let minDay4 = document.querySelector("#min-day-4");
    minDay4.innerHTML = `↓${temperatureMinDay4}º`;
    let iconDay4 = document.querySelector("#icon-day-4");
    iconDay4.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png`
    );
    //Day 5
    let temperatureMaxDay5 = Math.round(response.data.list[32].main.temp_max);
    let maxDay5 = document.querySelector("#max-day-5");
    maxDay5.innerHTML = `↑${temperatureMaxDay5}º`;
    let temperatureMinDay5 = Math.round(response.data.list[32].main.feels_like);
    let minDay5 = document.querySelector("#min-day-5");
    minDay5.innerHTML = `↓${temperatureMinDay5}º`;
    let iconDay5 = document.querySelector("#icon-day-5");
    iconDay5.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`
    );
    //Day 6
    let temperatureMaxDay6 = Math.round(response.data.list[39].main.temp_max);
    let maxDay6 = document.querySelector("#max-day-6");
    maxDay6.innerHTML = `↑${temperatureMaxDay6}º`;
    let temperatureMinDay6 = Math.round(response.data.list[39].main.feels_like);
    let minDay6 = document.querySelector("#min-day-6");
    minDay6.innerHTML = `↓${temperatureMinDay6}º`;
    let iconDay6 = document.querySelector("#icon-day-6");
    iconDay6.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`
    );
  }
  axios.get(`${apiUrl}&appid=${apiKey}`).then(newData);
  axios.get(`${apiUrlForecast}&appid=${apiKey}`).then(ForecastData);
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
  description.innerHTML = `${response.data.weather[0].main}`;

  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `${response.data.wind.speed} m/s`;

  let max_temp = Math.round(response.data.main.temp_max);
  let max = document.querySelector("#max");
  max.innerHTML = `↑${max_temp}`;
  let min_temp = Math.round(response.data.main.temp_min);
  let min = document.querySelector("#min");
  min.innerHTML = `↓${min_temp}`;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function ForecastData(response) {
  console.log(response);
  //Today
  let temperatureMaxToday = Math.round(response.data.list[0].main.temp_max);
  let maxToday = document.querySelector("#forecast-max-today");
  maxToday.innerHTML = `↑${temperatureMaxToday}º`;
  let temperatureMinToday = Math.round(response.data.list[0].main.feels_like);
  let minToday = document.querySelector("#forecast-min-today");
  minToday.innerHTML = `↓${temperatureMinToday}º`;
  let iconDay1 = document.querySelector("#icon-day-1");
  iconDay1.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
  );
  //Tomorrow
  let temperatureMaxTomorrow = Math.round(response.data.list[8].main.temp_max);
  let maxTomorrow = document.querySelector("#max-tomorrow");
  maxTomorrow.innerHTML = `↑${temperatureMaxTomorrow}º`;

  let temperatureMinTomorrow = Math.round(
    response.data.list[8].main.feels_like
  );
  let minTomorrow = document.querySelector("#min-tomorrow");
  minTomorrow.innerHTML = `↓${temperatureMinTomorrow}º`;
  let iconDay2 = document.querySelector("#icon-day-2");
  iconDay2.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png`
  );
  // Day 3
  let temperatureMaxDay3 = Math.round(response.data.list[16].main.temp_max);
  let maxDay3 = document.querySelector("#max-day-3");
  maxDay3.innerHTML = `↑${temperatureMaxDay3}º`;
  let temperatureMinDay3 = Math.round(response.data.list[16].main.feels_like);
  let minDay3 = document.querySelector("#min-day-3");
  minDay3.innerHTML = `↓${temperatureMinDay3}º`;
  let iconDay3 = document.querySelector("#icon-day-3");
  iconDay3.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png`
  );

  //Day 4
  let temperatureMaxDay4 = Math.round(response.data.list[24].main.temp_max);
  let maxDay4 = document.querySelector("#max-day-4");
  maxDay4.innerHTML = `↑${temperatureMaxDay4}º`;
  let temperatureMinDay4 = Math.round(response.data.list[24].main.feels_like);
  let minDay4 = document.querySelector("#min-day-4");
  minDay4.innerHTML = `↓${temperatureMinDay4}º`;
  let iconDay4 = document.querySelector("#icon-day-4");
  iconDay4.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png`
  );
  //Day 5
  let temperatureMaxDay5 = Math.round(response.data.list[32].main.temp_max);
  let maxDay5 = document.querySelector("#max-day-5");
  maxDay5.innerHTML = `↑${temperatureMaxDay5}º`;
  let temperatureMinDay5 = Math.round(response.data.list[32].main.feels_like);
  let minDay5 = document.querySelector("#min-day-5");
  minDay5.innerHTML = `↓${temperatureMinDay5}º`;
  let iconDay5 = document.querySelector("#icon-day-5");
  iconDay5.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`
  );
  //Day 6
  let temperatureMaxDay6 = Math.round(response.data.list[39].main.temp_max);
  let maxDay6 = document.querySelector("#max-day-6");
  maxDay6.innerHTML = `↑${temperatureMaxDay6}º`;
  let temperatureMinDay6 = Math.round(response.data.list[39].main.feels_like);
  let minDay6 = document.querySelector("#min-day-6");
  minDay6.innerHTML = `↓${temperatureMinDay6}º`;
  let iconDay6 = document.querySelector("#icon-day-6");
  iconDay6.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`
  );
}

function retrievePosition(position) {
  let apiKey = "940c8ed5f2cc9111c0cd74ba210060b2";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(changeData);
  axios.get(`${apiUrlForecast}&appid=${apiKey}`).then(ForecastData);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

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
