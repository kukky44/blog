import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PostCard from "./PostCard";

// ref: https://www.tamaosa.com/2020/related-posts/

const RelatedPosts = ({ title, cat }) => {
  if (!cat) return null;
  return (
    <StaticQuery
      query={relatedQuery}
      render={(data) => {
        const relatedItems = data.allMdx.edges.filter((edge) => {
          if (edge.node.frontmatter.title === title) {
            return false;
          }
          if (edge.node.frontmatter.category === cat) {
            return true;
          }
          return false;
        });
        if (!relatedItems.length) return null;
        relatedItems.slice(0, 5);

        return (
          <div className="relatedPost">
            <div className="relatedPost-title">Related Posts</div>
            <div className="postcards">
              {relatedItems.map(({ node }) => (
                <PostCard key={node.fields.slug} node={node} />
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

export default RelatedPosts;

const relatedQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            category
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
