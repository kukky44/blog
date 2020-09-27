import React from "react";
import { Link } from "gatsby";
import headerShowOff from "../module/headerShowOff";

const Header = () => {
  headerShowOff();

  return (
    <header id="navbar" className="header">
      <div className="headerWrapper">
        <div className="header-content">
          <Link className="header-content__title" to="/">
            <h1 className="header-content__titleText">Kukky</h1>
          </Link>
          <div className="header-content__search">
            <button className="material-icons">search</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
