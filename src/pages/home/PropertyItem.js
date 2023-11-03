import "./StyledItem.css";

const PropertyItem = (props) => {
  return (
    <div className="properties-item">
      <img src={props.image} width="170px" height="150px" />
      <h3>{props.name}</h3>
      <p>{props.count}</p>
    </div>
  );
};

export default PropertyItem;
