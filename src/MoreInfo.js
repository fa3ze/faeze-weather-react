import React, { useState } from "react";
import "./Weather.css";

//import WeatherForecastIcon from "./WeatherForecastIcon";
import windIcon from "./picture/wind.png";
import uvIcon from "./picture/uvi.png";
import sunriseIcon from "./picture/sunrise.png";
import sunsetIcon from "./picture/sunset.png";
import percipitationIcon from "./picture/percipitation.png";
import cloudy from "./picture/cloudy.png";
export default function Info() {
  const [isDarkModeEnabled] = useState(false);
  return (
    <div className="container show-more-box">
      <div className="row mt-4">
        <div
          className={
            "col-2 forecastBox " + (isDarkModeEnabled ? " dark-theme" : "")
          }
        >
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className="daytime text-center"> 03:00</div>
            </div>
          </div>
          <div className="row">
            <img src={cloudy} alt="weathericon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center"> 14°C</div>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        <div
          className={
            "col-2 forecastBox leftedgebox" +
            (isDarkModeEnabled ? " dark-theme" : "")
          }
        >
          <div className="row">
            <div classnName="col  text-center">
              <div className="daytime text-center"> percipitation</div>
            </div>
          </div>
          <div className="row">
            <img
              src={percipitationIcon}
              alt="percipitationicon"
              className="img-fluid"
            />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center"> %</div>
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
              <div className="daytime text-center"> wind</div>
            </div>
          </div>
          <div className="row">
            <img src={windIcon} alt="windicon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center">km/h</div>
          </div>
        </div>
        <div
          className={
            "col-2 forecastBox " + (isDarkModeEnabled ? " dark-theme" : "")
          }
        >
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className="daytime text-center"> uvi</div>
            </div>
          </div>
          <div className="row">
            <img src={uvIcon} alt="uviIcon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center"> 14°C</div>
          </div>
        </div>
        <div
          className={
            "col-2 forecastBox " + (isDarkModeEnabled ? " dark-theme" : "")
          }
        >
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className="daytime text-center"> sunrise</div>
            </div>
          </div>
          <div className="row">
            <img src={sunriseIcon} alt="sunriseIcon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center"> 14°C</div>
          </div>
        </div>
        <div
          className={
            "col-2 forecastBox rightedgebox d-none d-sm-block" +
            (isDarkModeEnabled ? " dark-theme" : "")
          }
        >
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className="daytime text-center"> sunset</div>
            </div>
          </div>
          <div className="row">
            <img src={sunsetIcon} alt="sunsetIcon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center"> 14°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
