import React from "react";

import clearDay from "./picture/clearDay.png";
import clearNight from "./picture/clearNight.png";
import partlyCloudyDay from "./picture/partlyCloudyDay.png";
import partlyCloudyNight from "./picture/partlyCloudyNight.png";
import cloudy from "./picture/cloudy.png";
import rain from "./picture/rain.png";
import partlyCloudySnow from "./picture/partlyCloudySnow.png";
import thunderstorms from "./picture/thunderstorms.png";
import mist from "./picture/mist.png";

export default function WeatherForecastIcon(props) {
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
    "10d": rain,
    "10n": rain,
    "11d": thunderstorms,
    "11n": thunderstorms,
    "13d": partlyCloudySnow,
    "13n": partlyCloudySnow,
    "50d": mist,
    "50n": mist,
  };

  return (
    <div>
      {" "}
      <img
        className="img-fluid"
        src={codeMapping[props.code]}
        alt={props.alt}
      />
    </div>
  );
}
