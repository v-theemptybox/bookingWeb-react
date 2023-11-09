import "./SearchPopup.css";

const SearchPopup = () => {
  return (
    <div id="popup-control">
      <h2>Search</h2>
      <h3>Destination</h3>
      <input type="text" />
      <h3>Check-in Date</h3>
      <input type="date" />
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
