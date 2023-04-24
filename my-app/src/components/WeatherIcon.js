import React from "react";

const WeatherIcon = ({ data }) => {
  return (
    <>
      {data === "Clouds"
        ? "☁️"
        : data === "Clear"
        ? "🌞"
        : data === "Rain"
        ? "☔"
        : data === "Snow"
        ? "☃️"
        : null}
    </>
  );
};

export default WeatherIcon;
