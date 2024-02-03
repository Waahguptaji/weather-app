import React from "react";
import Shimmer from "./Shimmer";
import moment from "moment";

const CityCard = ({ data, unit }) => {
  const { location } = data;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-4xl justify-center">{location?.name}</h2>
        <h2 className="font-extrabold text-4xl text-center">
          {moment.unix(location?.localtime_epoch).format(" h:mm a")}
        </h2>
        <p className="text-sm text-gray-500"></p>
      </div>
    </div>
  );
};

export default CityCard;
