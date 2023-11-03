import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleClick = () => {
    window.location.assign("/Search");
  };
  return (
    <div className="header">
      <div className="header-content">
        <h2>A lifetime of discounts? It's Genius</h2>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button>Sign in / Register</button>
        <div className="relative-form">
          <div className="form-control">
            <FontAwesomeIcon icon={faBed} className="icon" />
            <input type="text" placeholder="Where are you going?" />
            <FontAwesomeIcon icon={faCalendar} className="icon" />
            <input type="date" placeholder="Where are you going?" />
            <FontAwesomeIcon icon={faPerson} className="icon" />
            <input type="text" placeholder="1 adult - 0 children - 1 room" />
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
