import React from "react";
import cloudy from "./animation-ready/cloudy.svg";
import clearDay from "./animation-ready/clear-day.svg";
import clearNight from "./animation-ready/clear-night.svg";
import partlyCloudyDay from "./animation-ready/partly-cloudy-day.svg";
import partlyCloudyNight from "./animation-ready/partly-cloudy-night.svg";
import rain from "./animation-ready/rain.svg";
import partlyCloudyDayRain from "./animation-ready/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "./animation-ready/partly-cloudy-night-rain.svg";
import partlyCloudyDaySnow from "./animation-ready/partly-cloudy-day-snow.svg";
import partlyCloudyNightSnow from "./animation-ready/partly-cloudy-night-snow.svg";
import thunderstorms from "./animation-ready/thunderstorms.svg";
import mist from "./animation-ready/mist.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyCloudyDay,
    "02n": partlyCloudyNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": partlyCloudyDayRain,
    "10n": partlyCloudyNightRain,
    "11d": thunderstorms,
    "11n": thunderstorms,
    "13d": partlyCloudyDaySnow,
    "13n": partlyCloudyNightSnow,
    "50d": mist,
    "50n": mist,
  };

  return (
    <div>
      {" "}
      <img
        src={codeMapping[props.code]}
        alt={props.alt}
        className="img-fluid"
      />
    </div>
  );
}
