import React from "react";

const DaysData = ({ data, unit }) => {
  const { forecast } = data;

  return (
    <div className="w-full  bg-base-100 shadow-xl p-6 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">5 Days Forecast</h1>
      {forecast.forecastday.map((dayData, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b py-2"
        >
          <div className="flex items-center">
            <img
              src={dayData.day.condition.icon}
              alt={dayData.day.condition.text}
              className="w-8 h-8 mr-4"
            />
            <p className="text-gray-500">{dayData.day.condition.text}</p>
          </div>
          {unit === "°C" ? (
            <p className="text-gray-500">{dayData.day.avgtemp_c}°C</p>
          ) : (
            <p className="text-gray-500">{dayData.day.avgtemp_f}°F</p>
          )}
          <h3 className="text-lg font-semibold">{dayData.date}</h3>
        </div>
      ))}
    </div>
  );
};

export default DaysData;
