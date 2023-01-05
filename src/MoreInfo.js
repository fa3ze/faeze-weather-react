import React from "react";
import "./Weather.css";
import windIcon from "./picture/wind.png";
import uvIcon from "./picture/uvi.png";
import sunriseIcon from "./picture/sunrise.png";
import sunsetIcon from "./picture/sunset.png";
import percipitationIcon from "./picture/percipitation.png";
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
      <div className="row mt-4">
        <div className="col-2 forecastBox ">
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
      <div className="row m-4">
        <div className="col-2 forecastBox ">
          <div className="row">
            <div classnName="col  text-center">
              <div className=" text-center"> percipitation</div>
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
            <div className=" text-center"> %</div>
          </div>
        </div>
        <div className="col-2 forecastBox">
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
            <div className=" text-center">{props.data.wind} km/h</div>
          </div>
        </div>
        <div className="col-2 forecastBox ">
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className=" text-center"> uvi</div>
            </div>
          </div>
          <div className="row">
            <img src={uvIcon} alt="uviIcon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className=" text-center"> 14°C</div>
          </div>
        </div>
        <div className="col-2 forecastBox ">
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className="text-center"> sunrise</div>
            </div>
          </div>
          <div className="row">
            <img src={sunriseIcon} alt="sunriseIcon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className=" text-center"> {sunriseFormatTime}</div>
          </div>
        </div>
        <div className="col-2 forecastBox">
          <div className="row">
            <div classnName="col  text-center">
              {" "}
              <div className=" text-center"> sunset</div>
            </div>
          </div>
          <div className="row">
            <img src={sunsetIcon} alt="sunsetIcon" className="img-fluid" />
          </div>{" "}
          <div className="row">
            <div className="daytemp text-center">{sunsetFormatTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
