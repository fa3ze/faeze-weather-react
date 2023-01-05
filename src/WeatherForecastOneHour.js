import React from "react";

import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherForecastOneHour(props) {
  let temperature = Math.round(props.data.temp);
  let date = new Date(props.data.dt * 1000);
  let amPm = "";
  let hour = date.getHours();

  if (hour > 12) {
    amPm = "PM";
    hour = hour - 12;
  } else {
    if (hour === 12) {
      amPm = "PM";
    } else {
      if (hour < 12 && hour > 0) {
        amPm = "AM";
      } else {
        if (hour === 0) {
          hour = hour + 12;
          amPm = "AM";
        }
      }
    }
  }

  return (
    <div className="row ">
      <div className="col m-2 forecastBox ">
        <div className="hour text-center">
          {" "}
          {hour} {amPm}
        </div>
        <WeatherForecastIcon code={props.data.weather[0].icon} />
        <div className="hour text-center">
          {" "}
          {temperature}
          °C
        </div>
      </div>
    </div>
  );
}
