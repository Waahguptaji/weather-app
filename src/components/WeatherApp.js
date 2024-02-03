import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { API_KEY, API_URL } from "../utils/constants";
import CityCard from "./CityCard";
import DaysData from "./DaysData";
import ThemeController from "./ThemeController";

const WeatherApp = () => {
  const [city, setCity] = useState("Indore");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("C");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("cupcake");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [unit]);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
      );
      const data = await response.json();

      if (data.error) {
        setError("City not found. Please enter a valid city name.");
        setWeatherData(null); // Clear weather data if there's an error
        setCity("");
      } else {
        setError(null); // Clear the error if successful
        setWeatherData(data);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleUnitChange = () => {
    setUnit(unit === "°C" ? "°F" : "°C");
  };

  return (
    <div className="p-4 bg-base-200 min-h-screen">
      <div className="flex m-4 mb-6 items-center justify-around">
        <ThemeController />
        {/* Search */}
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Search city"
            className="input input-bordered w-1/2"
            value={city}
            onChange={handleCityChange}
          />
          <button className="btn btn-primary ml-3" onClick={fetchWeatherData}>
            Search
          </button>
        </div>

        {/* Units */}
        <div className="flex justify-center">
          <button className="btn btn-outline" onClick={handleUnitChange}>
            <span>{unit === "°C" ? "°C" : "°F"}</span>
          </button>
        </div>
      </div>
      {/* Error message */}
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>
      )}

      {/* Content */}
      <div className=" grid gap-4 md:grid-flow-col ">
        {weatherData && (
          <div>
            <CityCard data={weatherData} unit={unit} />
          </div>
        )}

        {weatherData && (
          <div>
            <WeatherCard data={weatherData} unit={unit} />
          </div>
        )}
        {weatherData && (
          <div>
            <DaysData data={weatherData} unit={unit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
