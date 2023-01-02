import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        {" "}
        <span className="temperature">{Math.round(props.celcius)}</span>{" "}
        <span className="temp-degree">
          <span className="btn btn-link" onClick={showFahrenheit}>
            °C
          </span>
          |<span className="btn btn-link">°F</span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        {" "}
        <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
        <span className="temp-degree">
          <span className="btn btn-link">°C</span>|
          <span className="btn btn-link" onClick={showCelsius}>
            °F
          </span>
        </span>
      </div>
    );
  }
}
