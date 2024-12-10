import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleClick = async () => {
    const API_KEY = "c2eb7f097fb121320fbc9d4b7bab9086";

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(weatherURL);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <>
      <div className="Weather">
        <div className="input">
          <input
            type="text"
            placeholder="Enter City, Country"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleClick}>
            <ion-icon name="search" />
          </button>
        </div>
        {weatherData && (
          <div className="weather-info">
            <p>Temperature: {weatherData.main.temp}°C</p>{" "}
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
