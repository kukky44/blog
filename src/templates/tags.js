import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import SEO from "../components/SEO";

const Tags = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;
  const tag = pageContext.tag;

  return (
    <Layout>
      <SEO title={tag} />
      <div className="tagPage">
        <div className="tagPage-title">
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </div>
        <div className="postcards">
          {posts.map(({ node }) => {
            return <PostCard key={node.fields.slug} node={node} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query BlogByTags($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: 1000
    ) {
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
