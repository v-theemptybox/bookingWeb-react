import "./SearchPopup.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchPopup = () => {
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
    <div id="popup-control">
      <h2>Search</h2>
      <h3>Destination</h3>
      <input type="text" />
      <h3>Check-in Date</h3>

      <input
        className="date-range-input"
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
          className="date-range-modal"
          editableDateInputs={true}
          onChange={(item) => setRange(item.selection)}
          moveRangeOnFirstSelection={false}
          ranges={[range]}
        />
      )}
      <h3>Options</h3>
      <div id="nested-popup">
        <label>Min price per night</label>
        <input type="number" />
        <label>Max price per night</label>
        <input type="number" />
        <label>Adult</label>
        <input type="number" placeholder="1" />
        <label>Children</label>
        <input type="number" placeholder="0" />
        <label>Room</label>
        <input type="number" placeholder="1" />
      </div>

      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
