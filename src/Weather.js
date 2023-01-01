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
import uvIcon from "./picture/uvi.png";
import sunriseIcon from "./picture/sunrise.png";
import sunsetIcon from "./picture/sunset.png";
import percipitationIcon from "./picture/percipitation.png";

export default function Weather() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
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
                <div className="col-6 mt-2   description">
                  <img src={descriptionIcon} alt="description" width="40" />{" "}
                  description
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-2   description">
                  <img src={humidityIcon} alt="humidity" width="40" /> %
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
}
