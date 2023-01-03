import React from "react";
import axios from "axios";
import "./Weather.css";

export default function CurrentLocation(props) {
  function handleResponse(response) {
    props.setCity(response.data.name);
    props.search();
  }

  function handleLocation(event) {
    event.preventDefault();

    function currentCity(location) {
      let apiKey = "197ef3a642b76eef90e131866f74a0a0";
      let long = location.coords.longitude;
      let lat = location.coords.latitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    navigator.geolocation.getCurrentPosition(currentCity);
  }

  return (
    <div className="CurrentLocation">
      {" "}
      <form>
        {" "}
        <input
          type="submit"
          value="📍"
          className="btn btn-light"
          onClick={handleLocation}
        />
      </form>
    </div>
  );
}
