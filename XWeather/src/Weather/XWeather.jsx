import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import WeatherCard from "../WeatherCard/WeatherCard";
import styles from "./XWeather.module.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState("");

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div className={styles.weatherApp}>
      <h1>Weather App</h1>
      <SearchForm onSearch={handleSearch} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}
