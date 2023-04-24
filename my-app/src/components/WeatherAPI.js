import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Jeonju&lang=kr&units=metric&appid=${API_KEY}`;

const WeatherAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL);
      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <>
      <li className="WeatherIcon_wrapper">
        <WeatherIcon data={data.weather[0].main} />
      </li>
      <li>현재기온: {data.main.temp}</li>
    </>
  );
};

export default WeatherAPI;
