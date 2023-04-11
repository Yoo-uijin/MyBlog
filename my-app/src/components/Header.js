import React from "react";
import DustAPI from "./DustAPI";
import WeatherAPI from "./WeatherAPI";

const Header = () => {
  return (
    <header className="Header">
      <h1>TimeTam</h1>
      <DustAPI />
      <WeatherAPI />
    </header>
  );
};

export default Header;
