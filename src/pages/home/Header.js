import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
  const handleClick = () => {
    window.location.assign("/Search");
  };

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [open, setOpen] = useState(false);

  const handleEscpae = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <h2>A lifetime of discounts? It's Genius</h2>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button>Sign in / Register</button>
        <div className={styles["relative-form"]}>
          <div className={styles["form-control"]}>
            <FontAwesomeIcon icon={faBed} className={styles.icon} />
            <input type="text" placeholder="Where are you going?" />
            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
            <input
              value={`${range.startDate.toLocaleDateString(
                "vi-VN"
              )} to ${range.endDate.toLocaleDateString("vi-VN")}`}
              readOnly
              onClick={() => {
                setOpen((open) => !open);
              }}
              onKeyDown={handleEscpae}
            />
            {open && (
              <DateRange
                className={styles["date-range-modal"]}
                editableDateInputs={true}
                onChange={(item) => setRange(item.selection)}
                moveRangeOnFirstSelection={false}
                ranges={[range]}
              />
            )}

            <FontAwesomeIcon icon={faPerson} className={styles.icon} />
            <input type="text" placeholder="1 adult - 0 children - 1 room" />
            <button className="search-btn" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
