import React from "react";
import { Link } from "gatsby";

const CategoryLink = ({ catName, catLink, path }) => {
  let linkClassName = "cat-item__link " + catName;

  if (catLink === path) {
    linkClassName += " active";
  }

  return (
    <Link to={catLink} className={linkClassName}>
      <li className="cat-item__list">
        <div className="cat-item__name">{catName}</div>
        <div className="cat-item__underline"></div>
      </li>
    </Link>
  );
};

const CategoryMenu = ({ location }) => {
  let path;
  if (location) {
    path = location.pathname;
  } else {
    path = "";
  }
  return (
    <nav className="category-menu">
      <ul className="category-menu__list">
        <CategoryLink catName="All" catLink="/" path={path} />
        <CategoryLink
          catName="Design"
          catLink="/category/design/"
          path={path}
        />
        <CategoryLink
          catName="Develop"
          catLink="/category/develop/"
          path={path}
        />
        <CategoryLink catName="Self" catLink="/category/self/" path={path} />
      </ul>
    </nav>
  );
};

export default CategoryMenu;
