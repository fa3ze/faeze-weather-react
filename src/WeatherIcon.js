import React from "react";

export default function WeatherIcon(prop) {
  const codeMapping = {
    "01d": "/icons/01d.svg",
  };

  return (
    <div className="WeatherIcon pr-5 ">
      <img
        src={codeMapping[prop.icon]}
        alt={prop.alt}
        className="img-fluid  "
      />
    </div>
  );
}
