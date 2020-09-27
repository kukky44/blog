import React from "react";
import { Link } from "gatsby";

const searchClicked = () => {
  console.log("search");
};

export default function Header() {
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      if (window.pageYOffset < 64) {
        document.getElementById("navbar").classList.remove("onScroll");
      } else {
        document.getElementById("navbar").classList.add("onScroll");
      }
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
        (maxScroll > 0 &&
          prevScrollpos > currentScrollPos &&
          prevScrollpos <= maxScroll) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        if (currentScrollPos === 0) return;
        document.getElementById("navbar").style.top = "-5.0rem";
      }
      prevScrollpos = currentScrollPos;
    };
  }
  return (
    <header id="navbar" className="header">
      <div className="headerWrapper">
        <div className="header-content">
          <Link className="header-content__title" to="/">
            <h1 className="header-content__titleText">Kukky</h1>
          </Link>
          <div className="header-content__search">
            <input type="text" />
            <button onClick={searchClicked} className="material-icons">
              search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
