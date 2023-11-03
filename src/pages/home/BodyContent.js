import React from "react";
import CityItem from "./CityItem";
import "./BodyContent.css";
import PropertyItem from "./PropertyItem";
import HotelItem from "./HotelItem";

const BodyContent = () => {
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

  const propertiesType = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  const hotelList = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div className="main-content">
      <div className="flex-content">
        {cities.map((element, id) => {
          return (
            <CityItem
              key={id}
              name={element.name}
              subtext={element.subText}
              image={element.image}
            />
          );
        })}
      </div>
      <h3 className="content-title">Browse by properties type</h3>
      <div className="flex-content">
        {propertiesType.map((element, id) => {
          return (
            <PropertyItem
              key={id}
              name={element.name}
              image={element.image}
              count={element.count}
            />
          );
        })}
      </div>
      <h3 className="content-title">Homes guests love</h3>
      <div className="flex-content">
        {hotelList.map((element, id) => {
          return (
            <HotelItem
              key={id}
              name={element.name}
              city={element.city}
              image={element.image_url}
              count={element.count}
              price={element.price}
              rate={element.rate}
              type={element.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodyContent;
