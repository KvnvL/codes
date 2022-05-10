import { FaSearch } from "react-icons/fa";

const Searchbar = ({ search }) => {
  const placeholderText = "Zoek een " + search;
  return (
    <div>
      <FaSearch id="searchIcon" />
      <input id="searchbar" type="text" placeholder={placeholderText} />
    </div>
  );
};

export default Searchbar;
