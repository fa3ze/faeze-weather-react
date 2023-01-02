import React, { useState } from "react";

export default function WeatherTemperatureFeel(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperatureFeel">
        feels like: {""}
        <span className="feel-temperature">
          {Math.round(props.celsius)}
        </span>{" "}
        {""}
        <span className="feel-unit">
          °C|
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperatureFeel">
        {" "}
        feels like: {""}
        <span className="feel-temperature">{Math.round(farenheit())}</span>
        <span className="feel-unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
