import React, { useState } from "react";
import "./Weather.css";
import Toggle from "./Toggle";
import MoreInfo from "./MoreInfo";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherTemperatureFeel from "./WeatherTemperatureFeel";
import CurrentLocation from "./CurrentLocation";
import WeatherForecastDay from "./WeatherForecastDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Weather(props) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // toggle shown state
    setIsShown((current) => !current);
    //  or simply set it to true  // setIsShown(true);
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
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
      sunriseTime: response.data.sys.sunrise * 1000,
      sunsetTime: response.data.sys.sunset * 1000,
      timezone: response.data.timezone / 3600,
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
              <div className="col-1">
                <form>
                  <button type="submit" className="btn btn-light">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassLocation}
                    ></FontAwesomeIcon>
                  </button>
                </form>
              </div>
              <div className="col-2">
                <CurrentLocation setCity={setCity} search={search} />
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
                    <WeatherTemperature celsius={weatherData.temperature} />
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="col">
                    <WeatherTemperatureFeel celsius={weatherData.fellstemp} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 mt-2  d-none d-md-block description">
                    <span className="fontawesome-description">
                      <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                    </span>
                    {""} {weatherData.description} {""}
                    <span className="fontawesome-description">
                      <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-2">
              <WeatherForecastDay coordinates={weatherData.coordinates} />
            </div>
            <div>
              <button
                className={
                  "btn btn-light  show-button text-center" +
                  (isDarkModeEnabled ? " dark-theme" : "")
                }
                onClick={handleClick}
              >
                {isShown ? "Show Less " : "Show more Data"}
              </button>

              {/* 👇️ show elements on click */}
              {isShown && (
                <div>
                  <MoreInfo data={weatherData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return (
      <div>
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#0B2748"
          className="text-center"
        />
      </div>
    );
  }
}
