import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";
import "./Search.css";
import SignUpForm from "../home/SignUpForm";
const Search = () => {
  return (
    <div className="center">
      <Navbar />
      <div id="flex-search">
        <SearchPopup id="search-popup" />
        <SearchList id="search-list" />
      </div>
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Search;
