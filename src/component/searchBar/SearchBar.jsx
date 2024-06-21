import { useContext, useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import notfound from "../img/notfound.png";
import "./SearchBar.css";
import MainContext from "../store/main-context";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const searchRef = useRef(null);
  const mainCtx = useContext(MainContext);
  const allProduct = mainCtx.productData;
  const navigate = useNavigate();

  const filterSearchDate = allProduct
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);
  useEffect(() => {
    const clickOutsideHandle = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResult(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandle);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandle);
    };
  }, [searchRef]);

  return (
    <div ref={searchRef}>
      <div className="search">
        <GoSearch className="icon" />
        <input
          type="text"
          placeholder="Search Item"
          onChange={(e) => {
            setSearch(e.target.value);
            setShowResult(true);
          }}
        />
      </div>
      <div className="search-container">
        {showResult && search && (
          <div className="search-result">
            {filterSearchDate.length > 0 ? (
              <>
                {filterSearchDate.map((item, index) => (
                  <div key={index} className="search-item" onClick={() => navigate(`/singleprod/${item.id}`)}>
                    <div className="item-container">
                      <img className="item-img" src={item.image} alt="" />
                      <p>{item.name}</p>
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
