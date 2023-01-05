import React, { useState, useEffect } from "react";
import axios from "axios";
//import WeatherForecastOneHour from "./WeatherForecastOneHour";
import "./Weather.css";
import windIcon from "./picture/wind.png";

import humidityIcon from "./picture/humidity.png";
import sunriseIcon from "./picture/sunrise.png";
import sunsetIcon from "./picture/sunset.png";
import pressureIcon from "./picture/pressure.png";
import cloudy from "./picture/cloudy.png";
export default function Info(props) {
  function getTime(timestamp, timeZone) {
    let date = new Date(timestamp);
    let hours = Math.round((date.getUTCHours() + timeZone + 24) % 24);
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  let sunriseFormatTime = getTime(props.data.sunriseTime, props.data.timezone);
  let sunsetFormatTime = getTime(props.data.sunsetTime, props.data.timezone);

  return (
    <div className="container show-more-box">
      <div className="row ">
        <div className="col m-2 forecastBox ">
          <div className="daytime text-center"> 03:00</div>
          <img src={cloudy} alt="weathericon" className="img-fluid" />
          <div className="daytemp text-center"> 14°C</div>
        </div>
      </div>

      <div className="row ">
        <div className="col m-2 forecastBox ">
          <div className=" text-center"> pressure</div>
          <img
            src={pressureIcon}
            alt="percipitationicon"
            className="img-fluid"
          />
          <div className=" text-center info">
            {props.data.pressure} {""}hPa
          </div>
        </div>

        <div className="col m-2 forecastBox">
          <div className="daytime text-center"> humidity</div>
          <img src={humidityIcon} alt="windicon" className="img-fluid" />
          <div className=" text-center info">{props.data.humidity} %</div>
        </div>

        <div className="col m-2 forecastBox ">
          <div className=" text-center"> wind</div>
          <img src={windIcon} alt="windicon" className="img-fluid" />
          <div className=" text-center info"> {props.data.wind} km/h</div>
        </div>

        <div className="col m-2 forecastBox ">
          <div className="text-center"> sunrise</div>
          <img src={sunriseIcon} alt="sunriseIcon" className="img-fluid" />
          <div className=" text-center info"> {sunriseFormatTime}</div>
        </div>

        <div className="col m-2 forecastBox">
          <div className=" text-center"> sunset</div>
          <img src={sunsetIcon} alt="sunsetIcon" className="img-fluid" />
          <div className="daytemp text-center info">{sunsetFormatTime}</div>
        </div>
      </div>
    </div>
  );
}
