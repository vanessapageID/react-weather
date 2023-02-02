import React, { useState } from "react";
import axios from "axios";
import Date from "./date";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [sky, setSky] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [snow, setSnow] = useState("");
  let [cityName, setCityName] = useState("");
  let [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d45cd9aba9578de617649933c326fdc&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setDate(response.data.dt * 1000);
    setSnow(response.data.weather[0].main);
    setTemperature(Math.round(response.data.main.temp * 10) / 10);
    setSky(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCityName(response.data.name);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (snow === "Snow") {
    return (
      <div>
        <div>
          <div className="Forecast">
            <div className="CurrentWeather">
              <h2>
                Currently, in {cityName}
                <Date date={date} />
              </h2>
              <p className="snow"> it is snowing.</p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    The temperature is {temperature}°C
                  </div>
                  <div className="col-6">The sky is {sky}</div>
                </div>
                <div className="row">
                  <div className="col-6">There is {humidity}% humidity</div>
                  <div className="col-6">The wind speed is {wind} km/h</div>
                </div>
              </div>
              <p>
                <img src={icon} alt="weather icon" />
              </p>
            </div>
            <div className="Forecast-5"></div>
            Placeholder for the five-day forecast
          </div>
          <div className="Search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city & press Search"
                onChange={updateCity}
              />
              <input className="button" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    );
  } else if (snow) {
    return (
      <div>
        <div>
          <div className="Forecast">
            <div className="CurrentWeather">
              <h2>
                Currently, in {cityName}
                <Date date={date} />
              </h2>
              <p className="snow">it is not snowing.</p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    The temperature is {temperature}°C
                  </div>
                  <div className="col-6">The sky is {sky}</div>
                </div>
                <div className="row">
                  <div className="col-6">There is {humidity}% humidity</div>
                  <div className="col-6">The wind speed is {wind} km/h</div>
                </div>
              </div>
              <p>
                <img src={icon} alt="weather icon" />
              </p>
            </div>
            <div className="Forecast-5">
              Placeholder for the five-day forecast
            </div>
          </div>
          <div className="Search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city & press Search"
                onChange={updateCity}
              />
              <input className="button" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city & press Search"
              onChange={updateCity}
            />
            <input className="button" type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}
