import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostList from "../components/PostList";

// TODO: プロフィールのSNS icon
// TODO: footer の作成
// TODO: 404ページ

const IndexPage = ({ data, location }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={posts} location={location} />
    </Layout>
  );
};

export const query = graphql`
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

export default IndexPage;
