// api.
const api = {
  key: "c42789aa315e7d2bd1e23e1cfa8d947b",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};
const seacrhBox = document.querySelector(".search-box");
seacrhBox.addEventListener("keypress", setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    // return key on keyboard.
    getResults(seacrhBox.value);
    console.log(seacrhBox.value);
  }
}
// create query for fetch.
function getResults(query) {
  // q = is mean q =(equal) query. &APPID is mean app Id (api key) for call several city.
  // return this in metric like celcius and certifying fahrenheit and we can return it in whatever we want.
 fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
        return weather.json();
    })
    .then(displayResult);
}
function displayResult(weather){
    console.log(weather);
    // weather.filter(`${weather.name}`);
    // city.
    // document.querySelector select location class and city as child from html.
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    // date.
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);
    // temperatur.
    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span> °C </span>`;
    // weather name.
    let weather_el = document.querySelector(".current .weather");
    weather_el.innerText = weather.weather[0].main;
    // weather icon.
    let icon = document.querySelector(".current .icon")
    icon.innerHTML = ("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
    // derajat.
    let hilow = document.querySelector(".hi-low");
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`;
}
// d just a variable for get date, month, year and day.
function dateBuilder (d){
    // month.
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // days.
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day=days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    // get all item.
    return `${day} ${date} ${month} ${year}`;
}