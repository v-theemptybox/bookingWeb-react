import "./SearchList.css";
import SearchListItem from "../SearchListItem/SearchListItem";

const SearchList = () => {
  const searchData = [
    {
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image_url: "./images/hotel_search_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_3.jpg",
    },
  ];

  return (
    <div id="list-item">
      {searchData.map((elment, id) => {
        return (
          <SearchListItem
            key={id}
            name={elment.name}
            distance={elment.distance}
            tag={elment.tag}
            type={elment.type}
            description={elment.description}
            free_cancel={elment.free_cancel}
            price={elment.price}
            rate={elment.rate}
            rate_text={elment.rate_text}
            image_url={elment.image_url}
          />
        );
      })}
    </div>
  );
};

export default SearchList;
