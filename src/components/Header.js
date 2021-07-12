import React from "react";
import { Link } from "gatsby";
import headerShowOff from "../module/headerShowOff";
// import Logo from "../images/logo.svg";
import SearchIcon from "../images/search_icon.svg";

const Header = () => {
  headerShowOff();

  return (
    <header id="navbar" className="header">
      <div className="headerWrapper">
        <div className="header-content">
          <Link className="header-content__title" to="/">
            <h1 className="header-content__titleText">
              {/* <img src={LogoImage} alt="Kukky" /> */}
              Kukky
            </h1>
          </Link>

          <Link to="/search" className="header-content__search">
            {/* <button className="material-icons">search</button> */}
            <img src={SearchIcon} alt="search" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
