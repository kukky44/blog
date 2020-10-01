import React from "react";
import { Link, navigate } from "gatsby";
import headerShowOff from "../module/headerShowOff";
import Logo from "../images/logo.svg";

const Header = ({ location }) => {
  let isSearchPage = false;
  if (typeof location !== "undefined") {
    if (location.pathname === "/search") {
      isSearchPage = true;
    }
  }
  headerShowOff();

  function pageBack() {
    if (typeof location !== "undefined") {
      if (location.search) {
        return navigate("/");
      }
    }
    window.history.back();
  }

  return (
    <header id="navbar" className="header">
      <div className="headerWrapper">
        <div className="header-content">
          <Link className="header-content__title" to="/">
            <h1 className="header-content__titleText">
              <img src={Logo} alt="Kukky" />
            </h1>
          </Link>
          {isSearchPage ? (
            <div className="header-content__search">
              <button onClick={pageBack} className="material-icons">
                close
              </button>
            </div>
          ) : (
            <Link to="/search" className="header-content__search">
              <button className="material-icons">search</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
