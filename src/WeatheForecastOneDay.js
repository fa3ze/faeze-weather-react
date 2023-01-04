import React, { useState } from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";
import "./Weather.css";
export default function WeatherForecastOneDay(props) {
  const [isDarkModeEnabled] = useState(false);
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div
        className={
          "forecastBox text-center" + (isDarkModeEnabled ? " dark-theme" : "")
        }
      >
        <div className="daytime "> {day()}</div>
        <div>
          <WeatherForecastIcon code={props.data.weather[0].icon} />
        </div>{" "}
        <div className="row">
          <span className="col-6 minTemp"> {minTemp()}</span>{" "}
          <span className="col-6 maxTemp"> {maxTemp()}</span>
        </div>
      </div>
    </div>
  );
}
