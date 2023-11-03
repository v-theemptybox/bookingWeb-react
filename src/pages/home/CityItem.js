import React from "react";
import "./StyledItem.css";

const CityItem = (props) => {
  return (
    <div className="img-container">
      <img src={props.image} width="260px" height="220px" />
      <h2>{props.name}</h2>
      <h3>{props.subtext}</h3>
    </div>
  );
};

export default CityItem;
