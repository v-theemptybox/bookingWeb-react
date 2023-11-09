import "./SearchListItem.css";

const SearchListItem = (props) => {
  return (
    <div id="item-desc">
      <div>
        <img src={props.image_url} width="100%" height="100%" />
      </div>

      <div>
        <h2>{props.name}</h2>
        <p>{props.distance} from center</p>
        <p
          style={{
            display: "inline-block",
            color: "#FFF",
            backgroundColor: "#008009",
            borderRadius: "4px",
            padding: "2px",
          }}
        >
          {props.tag}
        </p>
        <p>
          <strong>{props.description}</strong>
        </p>
        <p>{props.type}</p>
        <p style={{ color: "#008009" }}>
          {props.free_cancel ? (
            <>
              <strong>Free cancel</strong>
              <br />
              You can cancel later
            </>
          ) : (
            ""
          )}
        </p>
      </div>
      <div>
        <div>
          <span>{props.rate_text}</span>
          <span>{props.rate}</span>
        </div>
        <p>${props.price}</p>
        <p>Includes taxes and fees</p>
        <button>See availability</button>
      </div>
    </div>
  );
};

export default SearchListItem;
