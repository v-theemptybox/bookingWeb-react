import React from "react";
import CityItem from "./CityItem";
import "./Cities.css";

const Cities = () => {
  const cities = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  return (
    <div className="cities">
      <div className="flex-cities">
        <CityItem
          name={cities[0].name}
          subtext={cities[0].subText}
          image={cities[0].image}
        />
        <CityItem
          name={cities[1].name}
          subtext={cities[1].subText}
          image={cities[1].image}
        />
        <CityItem
          name={cities[2].name}
          subtext={cities[2].subText}
          image={cities[2].image}
        />
      </div>
    </div>
  );
};

export default Cities;
