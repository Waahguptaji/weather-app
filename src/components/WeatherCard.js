import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";

const WeatherCard = ({ data, unit }) => {
  const { current, forecast } = data;

  return (
    // <div className="bg-base-100 shadow-xl rounded-2xl w-full">
    <div className="bg-base-100 shadow-xl rounded-2xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {/* Left section */}
      <div>
        {unit === "°C" ? (
          <h2 className="text-5xl font-bold">{current?.temp_c}°C</h2>
        ) : (
          <h2 className="text-5xl font-bold">{current?.temp_f}°F</h2>
        )}

        <div className="flex">
          <img
            className="w-20 h-20"
            src={current?.condition?.icon}
            alt="weather icon"
          />

          <div className="ml-4">
            <p className="text-xl">{current?.condition?.text}</p>

            {unit === "°C" ? (
              <p className="text-gray-500">
                Feels like {current?.feelslike_c}°C
              </p>
            ) : (
              <p className="text-gray-500">
                Feels like {current?.feelslike_f}°F
              </p>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="stats stats-vertical mt-6 shadow stats-primary">
          <div className="stat">
            <FaTemperatureLow />
            <div className="stat-title">Min Temp</div>
            {unit === "°C" ? (
              <div>{forecast?.forecastday[0]?.day?.mintemp_c}°C</div>
            ) : (
              <div>{forecast?.forecastday[0]?.day?.mintemp_f}°F</div>
            )}
          </div>

          <div className="stat">
            <FaTemperatureHigh />
            <div className="stat-title">Max Temp</div>
            {unit === "°C" ? (
              <div>{forecast?.forecastday[0]?.day?.maxtemp_c}°C</div>
            ) : (
              <div>{forecast?.forecastday[0]?.day?.maxtemp_f}°F</div>
            )}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          {/* Sunrise/sunset */}
          <div className="stats shadow stats-primary">
            <div className="stat">
              <img
                src="./images/sunrise-white.png"
                alt="Sunrise Icon"
                className="w-8 h-8 mr-2"
              />
              <div className="stat-title">Sunrise</div>
              <div>{forecast?.forecastday[0]?.astro?.sunrise}</div>
            </div>

            <div className="stat">
              <img
                src="./images/sunset-white.png"
                alt="Sunset Icon"
                className="w-8 h-8 mr-2"
              />
              <div className="stat-title">Sunset</div>
              <div>{forecast?.forecastday[0]?.astro?.sunset}</div>
            </div>
          </div>
        </div>

        {/* Wind/extras */}
        <div className="stats shadow stats-primary">
          <div className="stat">
            <div className="stat-title">Wind</div>
            <div>{current?.wind_kph} kph</div>
          </div>
          <div className="stat">
            <div className="stat-title">Humidity</div>
            <div>{current?.humidity}%</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default WeatherCard;
