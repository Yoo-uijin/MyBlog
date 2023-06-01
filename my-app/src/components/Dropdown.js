import React, { useState } from "react";
import WeatherAPI from "./WeatherAPI";
import DustAPI from "./DustAPI";

const Dropdown = () => {
  return (
    <>
      <ul className="Dropdown">
        <WeatherAPI />
        <DustAPI />
      </ul>
    </>
  );
};

export default Dropdown;
