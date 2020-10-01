import React from "react";
import { Link } from "gatsby";

const TagList = ({ items }) => {
  return (
    <div className="tags">
      {items.map((tag) => (
        <Link key={tag} to={`/tags/${tag}`} className="tags-item">
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
