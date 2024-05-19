import { useState } from "react";
import { GoSearch } from "react-icons/go";
import notfound from "../img/notfound.png";
import "./SearchBar.css";

const searchDate = [
  {
    name: "Fashion",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Shirt",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "Jacket",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
  {
    name: "Mobile",
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  },
  {
    name: "Laptop",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Home",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "book",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
];

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const filterSearchDate = searchDate
    .filter((obj) => obj.name.toLocaleLowerCase().includes(search))
    .slice(0, 8);

  return (
    <div>
      <div className="search">
        <GoSearch className="icon" />
        <input
          type="text"
          placeholder="Search Item"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="search-container">
        {search && (
          <div className="search-result">
            {filterSearchDate.length > 0 ? (
              <>
                {filterSearchDate.map((item, index) => (
                  <div key={index} className="search-item">
                    <div className="item-container">
                      <img className="item-img" src={item.image} alt="" />
                      {item.name}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="no-results">
                <img src={notfound} alt="" className="not-found" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
