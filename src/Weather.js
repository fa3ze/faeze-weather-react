import React, { useState } from "react";
import "./Weather.css";
import Toggle from "./Toggle";
import MoreInfo from "./MoreInfo";
import weatherIcon1 from "./forcasticons/01d.svg";
import humidityIcon from "./picture/humidity.png";
import windIcon from "./picture/wind.png";
import descriptionIcon from "./picture/description.png";
import weatherIcon2 from "./picture/01d.png";
import weatherIcon3 from "./picture/01n.png";
import weatherIcon4 from "./picture/02d.png";
import weatherIcon5 from "./picture/02n.png";
import weatherIcon6 from "./picture/11.png";
import weatherIcon7 from "./picture/13.png";
import weatherIcon8 from "./picture/50.png";
import weatherIcon9 from "./picture/0304.png";
import weatherIcon10 from "./picture/0910.png";

export default function Weather() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  return (
    <div className={"Weather mt-5" + (isDarkModeEnabled ? " dark-theme" : "")}>
      <div className="container">
        <div className={"main-body" + (isDarkModeEnabled ? " dark-theme" : "")}>
          <div className="row text-center mt-2">
            <div className="col-3">
              <Toggle toggleHandler={setIsDarkModeEnabled} />
            </div>

            <div className="col-5">
              <form>
                <input
                  type="search"
                  value="Enter a city..."
                  className="form-control"
                  autoFocus="on"
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
          <div className="city text-center mt-4">City</div>
          <div className="date text-center">last updated:</div>
          <div className="row">
            <div className="col-6">
              <img
                src={weatherIcon1}
                alt="weather icon1"
                className="img-fluid"
              ></img>
            </div>
            <div className=" col-6 mt-5">
              <div className="row">
                <div className="col">
                  {" "}
                  <span className="temperature">19</span>{" "}
                  <span className="temp-degree">
                    <span className="btn btn-link">°C</span>|
                    <span className="btn btn-link">°F</span>
                  </span>
                </div>
              </div>
              <div className="row">
                {" "}
                <div className="col">
                  {" "}
                  feels like: 20{" "}
                  <span classnName="feelstemp">
                    <span className="btn btn-link">°C</span>|
                    <span className="btn btn-link">°F</span>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-2  d-none d-md-block">
                  <img src={windIcon} alt="wind" width="40" /> km/h
                </div>
              </div>
              <div className="row">
                <div className="col mt-3  d-none d-md-block">
                  {" "}
                  <img src={humidityIcon} alt="humidity" width="40" /> %
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-2  d-none d-md-block description">
                  <img src={descriptionIcon} alt="description" width="40" />{" "}
                  description
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className={
                "col-2 forecastBox leftedgebox" +
                (isDarkModeEnabled ? " dark-theme" : "")
              }
            >
              <div className="row">
                <div classnName="col  text-center">
                  <div className="daytime text-center"> 03:00</div>
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
                <div className="daytemp text-center"> 14°C</div>
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
                  <div className="daytime text-center"> 03:00</div>
                </div>
              </div>
              <div className="row" S>
                <img
                  src={weatherIcon3}
                  alt="weathericon"
                  className="img-fluid"
                />
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
                  <div className="daytime text-center"> 03:00</div>
                </div>
              </div>
              <div className="row">
                <img
                  src={weatherIcon4}
                  alt="weathericon"
                  className="img-fluid"
                />
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
                  <div className="daytime text-center"> 03:00</div>
                </div>
              </div>
              <div className="row">
                <img
                  src={weatherIcon5}
                  alt="weathericon"
                  className="img-fluid"
                />
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
                  <div className="daytime text-center"> 03:00</div>
                </div>
              </div>
              <div className="row">
                <img
                  src={weatherIcon6}
                  alt="weathericon"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="row">
                <div className="daytemp text-center"> 14°C</div>
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
                "col-2 forecastBox " + (isDarkModeEnabled ? " dark-theme" : "")
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
                "col-2 forecastBox " + (isDarkModeEnabled ? " dark-theme" : "")
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
            <MoreInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
