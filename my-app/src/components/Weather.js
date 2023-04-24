import React from "react";
import WeatherAPI from "./WeatherAPI";
import DustAPI from "./DustAPI";

const Weather = () => {
  return (
    <>
      <ul className="Weather">
        <WeatherAPI />
        <DustAPI />
      </ul>
    </>
  );
};

export default Weather;
