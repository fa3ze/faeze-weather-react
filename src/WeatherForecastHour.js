import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastOneHour from "./WeatherForecastOneHour";

export default function WeatherForecastHour(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.hourly);
  }
  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (fiveHourForecast, index) {
          if (index < 5) {
            return (
              <div key={index} className="col">
                <WeatherForecastOneHour data={fiveHourForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "d1a86552de255334f6117b348c4519bd";
    let units = "metric";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
