import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import TagList from "./TagList";

const PostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug;
  const Thumbnail = node.frontmatter.thumbnail.childImageSharp.fluid;
  const tags = node.frontmatter.tags;

  return (
    <div className="postcard-wrapper">
      <Link className="postcard-item" to={node.fields.slug}>
        <div className="postcard-item__thumb">
          <div className={"postcard-item__cat " + node.frontmatter.category}>
            {node.frontmatter.category.charAt(0).toUpperCase() +
              node.frontmatter.category.slice(1)}
          </div>
          <Img className="postcard-item__thumbImg" fluid={Thumbnail} />
        </div>
        <div className="postcard-item__info">
          <div className="postcard-item__date">{node.frontmatter.date}</div>
          <h2 className="postcard-item__title">{title}</h2>
        </div>
      </Link>
      {tags ? <TagList items={tags} /> : null}
    </div>
  );
};

export default PostCard;
