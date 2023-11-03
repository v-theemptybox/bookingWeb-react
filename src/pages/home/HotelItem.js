import "./StyledItem.css";

const HotelItem = (props) => {
  const handleClick = () => {
    window.location.assign("/Detail");
  };
  return (
    <div className="hotel-item">
      <img src={props.image} width="210px" height="220px" />
      <br />
      <a href="#" onClick={handleClick}>
        {props.name}
      </a>

      <p>{props.city}</p>
      <p>Starting from ${props.price}</p>
      <p>
        <span id="user-rate">{props.rate}</span> {props.type}
      </p>
    </div>
  );
};

export default HotelItem;
