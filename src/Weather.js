import React, { useState } from "react";
import "./Weather.css";
import Toggle from "./Toggle";
import MoreInfo from "./MoreInfo";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import humidityIcon from "./picture/humidity.png";
//import windIcon from "./picture/wind.png";
import descriptionIcon from "./picture/description.png";
import weatherIcon2 from "./picture/01d.png";
//import weatherIcon3 from "./picture/01n.png";
//import weatherIcon4 from "./picture/02d.png";
//import weatherIcon5 from "./picture/02n.png";
//import weatherIcon6 from "./picture/11.png";
import weatherIcon7 from "./picture/13.png";
import weatherIcon8 from "./picture/50.png";
import weatherIcon9 from "./picture/0304.png";
import weatherIcon10 from "./picture/0910.png";
//import uvIcon from "./picture/uvi.png";
//import sunriseIcon from "./picture/sunrise.png";
//import sunsetIcon from "./picture/sunset.png";
//import percipitationIcon from "./picture/percipitation.png";
//import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      fellstemp: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div
        className={"Weather mt-5" + (isDarkModeEnabled ? " dark-theme" : "")}
      >
        <div className="container">
          <div
            className={"main-body" + (isDarkModeEnabled ? " dark-theme" : "")}
          >
            <div className="row text-center mt-2">
              <div className="col-3">
                <Toggle toggleHandler={setIsDarkModeEnabled} />
              </div>

              <div className="col-5">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control search-box"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </form>
              </div>
              <div className="col-2">
                <form>
                  {" "}
                  <input type="submit" value="🔎" className="btn btn-light" />
                </form>
              </div>
              <div className="col-2">
                <form>
                  {" "}
                  <input type="submit" value="📍" className="btn btn-light" />
                </form>
              </div>
            </div>
            <div className="city text-center mt-4">{weatherData.city}</div>
            <div className="date text-center">
              last updated: <FormattedDate date={weatherData.date} />
            </div>
            <div className="row">
              <div className=" col-6">
                {" "}
                <WeatherIcon
                  code={weatherData.icon}
                  alt={weatherData.description}
                />
              </div>

              <div className=" col-6 mt-5">
                <div className="row">
                  <div className="col">
                    {" "}
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>{" "}
                    <span className="temp-degree">
                      <span className="btn btn-link">°C</span>|
                      <span className="btn btn-link">°F</span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="col">
                    <span className="feel-like">
                      {" "}
                      feels like: {Math.round(weatherData.fellstemp)}
                    </span>
                    <span classnName="feelstemp">
                      <span className="btn btn-link">°C</span>|
                      <span className="btn btn-link">°F</span>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 mt-2   description">
                    <img src={descriptionIcon} alt="description" width="40" />{" "}
                    {weatherData.description}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mt-2   description">
                    <img src={humidityIcon} alt="humidity" width="40" />
                    {weatherData.humidity} %
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-4">
              <div
                className={
                  "col-2 forecastBox leftedgebox" +
                  (isDarkModeEnabled ? " dark-theme" : "")
                }
              >
                <div className="row">
                  <div classnName="col  text-center">
                    {" "}
                    <div className="daytime text-center"> saturday</div>
                  </div>
                </div>
                <div className="row">
                  <img
                    src={weatherIcon7}
                    alt="weathericon"
                    className="img-fluid"
                  />
                </div>{" "}
                <div className="row">
                  <span className="col-6 minTemp">12°C</span>{" "}
                  <span className="col-6 maxTemp">15°C</span>
                </div>
              </div>
              <div
                className={
                  "col-2 forecastBox" + (isDarkModeEnabled ? " dark-theme" : "")
                }
              >
                <div className="row">
                  <div classnName="col  text-center">
                    {" "}
                    <div className="daytime text-center"> saturday</div>
                  </div>
                </div>
                <div className="row">
                  <img
                    src={weatherIcon8}
                    alt="weathericon"
                    className="img-fluid"
                  />
                </div>{" "}
                <div className="row">
                  <span className="col-6 minTemp">12°C</span>{" "}
                  <span className="col-6 maxTemp">15°C</span>
                </div>
              </div>
              <div
                className={
                  "col-2 forecastBox " +
                  (isDarkModeEnabled ? " dark-theme" : "")
                }
              >
                <div className="row">
                  <div classnName="col  text-center">
                    {" "}
                    <div className="daytime text-center"> saturday</div>
                  </div>
                </div>
                <div className="row">
                  <img
                    src={weatherIcon9}
                    alt="weathericon"
                    className="img-fluid"
                  />
                </div>{" "}
                <div className="row">
                  <span className="col-6 minTemp">12°C</span>{" "}
                  <span className="col-6 maxTemp">15°C</span>
                </div>
              </div>
              <div
                className={
                  "col-2 forecastBox " +
                  (isDarkModeEnabled ? " dark-theme" : "")
                }
              >
                <div className="row">
                  <div classnName="col  text-center">
                    {" "}
                    <div className="daytime text-center"> saturday</div>
                  </div>
                </div>
                <div className="row">
                  <img
                    src={weatherIcon10}
                    alt="weathericon"
                    className="img-fluid"
                  />
                </div>{" "}
                <div className="row">
                  <span className="col-6 minTemp">12°C</span>{" "}
                  <span className="col-6 maxTemp">15°C</span>
                </div>
              </div>
              <div
                className={
                  "col-2 forecastBox rightedgebox d-none d-sm-block " +
                  (isDarkModeEnabled ? " dark-theme" : "")
                }
              >
                <div className="row">
                  <div classnName="col  text-center">
                    {" "}
                    <div className="daytime text-center"> saturday</div>
                  </div>
                </div>
                <div className="row">
                  <img
                    src={weatherIcon2}
                    alt="weathericon"
                    className="img-fluid"
                  />
                </div>{" "}
                <div className="row">
                  <span className="col-6 minTemp">12°C</span>{" "}
                  <span className="col-6 maxTemp">15°C</span>
                </div>
              </div>
            </div>

            <div>
              <button
                className={
                  "btn btn-light  show-button mb-4" +
                  (isDarkModeEnabled ? " dark-theme" : "")
                }
                onClick={handleClick}
              >
                {isShown ? "Show Less " : "Show more Data"}
              </button>

              {/* 👇️ show elements on click */}
              {isShown && (
                <div>
                  <MoreInfo />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "loading...";
  }
}
