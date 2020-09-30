import React from "react";
import CategoryMenu from "./CategoryMenu";
import PostCard from "../components/PostCard";
import Bio from "./Bio";

const PostList = ({ posts, location }) => {
  return (
    <div className="postList">
      <CategoryMenu location={location} />
      <div className="postList-content flexContent">
        <div className="flexContent-main">
          <div className="postcards">
            {posts.map(({ node }) => (
              <PostCard key={node.fields.slug} node={node} />
            ))}
          </div>
        </div>
        <Bio />
      </div>
    </div>
  );
};

export default PostList;
