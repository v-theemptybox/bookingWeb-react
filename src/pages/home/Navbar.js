import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const navData = [
  {
    type: "Stays",
    icon: faBed,
    active: true,
  },
  {
    type: "Flights",
    icon: faPlane,
    active: false,
  },
  {
    type: "Car rentals",
    icon: faCar,
    active: false,
  },
  {
    type: "Attractions",
    icon: faBed,
    active: false,
  },
  {
    type: "Airport taxis",
    icon: faTaxi,
    active: false,
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-navbar">
        <span>Booking Website</span>
        <button>Register</button>
        <button>Login</button>
      </div>
      <div className="flex-navbar">
        {navData.map((element, id) => {
          return (
            <div key={id} className={`${element.active ? "active-btn" : ""}`}>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={element.icon} /> {element.type}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
