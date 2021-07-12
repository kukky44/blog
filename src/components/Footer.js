import React from "react";
import TagList from "./TagList";
import { graphql, StaticQuery } from "gatsby";

const Footer = () => {
  return (
    <StaticQuery
      query={getQuery}
      render={(data) => {
        let tagsGroup = [];
        data.allMdx.edges.forEach((post) => {
          if (post.node.frontmatter.tags) {
            tagsGroup.push(post.node.frontmatter.tags);
          }
        });
        let tagList = [];
        tagsGroup.forEach((tags) => tags.forEach((tag) => tagList.push(tag)));
        tagList = [...new Set(tagList)];

        return (
          <div className="footer">
            <div className="allTags">
              <div className="allTags-title">All Tags</div>
              <TagList items={tagList} />
            </div>
            <footer className="footer-content">
              <div>
                © {new Date().getFullYear()}, Kukky All rights reserved.
              </div>
            </footer>
          </div>
        );
      }}
    />
  );
};

export default Footer;

const getQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
