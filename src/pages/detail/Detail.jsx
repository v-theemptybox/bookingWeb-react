import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Detail.css";

import SignUpForm from "../home/SignUpForm";

const Detail = () => {
  const detailData = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div>
      <Navbar />
      <div id="detail">
        <div className="grid-desc">
          <h2>{detailData.name}</h2>
          <h5>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;
            <span>{detailData.address}</span>
          </h5>
          <p>{detailData.distance}</p>
          <p>{detailData.price}</p>

          <div>
            <button>Reserve or Book Now!</button>
          </div>
        </div>

        <div className="grid-img">
          {detailData.photos.map((element, id) => {
            return <img key={id} src={element} width="100%" />;
          })}
        </div>

        <div className="flex-detail__desc">
          <div className="detail__desc">
            <h2>{detailData.title}</h2>
            <p>{detailData.description}</p>
          </div>
          <div className="detail__card">
            <h3>Perfect for a 9-night stay!</h3>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <p>
              <b>${detailData.nine_night_price}</b> (9 nights)
            </p>

            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Detail;
