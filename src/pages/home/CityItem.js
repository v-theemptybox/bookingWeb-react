import React from "react";
import "./CityItem.css";

const CityItem = (props) => {
  return (
    <div className="img-container">
      <img src={props.image} width="200px" />
      <h2>{props.name}</h2>
      <h3>{props.subtext}</h3>
    </div>
  );
};

export default CityItem;
