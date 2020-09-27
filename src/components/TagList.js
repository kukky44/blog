import React from "react";
import { Link } from "gatsby";

const TagList = ({ items }) => {
  return (
    <div className="postcard-tags">
      {items.map((tag) => (
        <Link key={tag} to={`/tags/${tag}`} className="postcard-tags__item">
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
