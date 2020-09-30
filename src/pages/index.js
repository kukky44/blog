import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostList from "../components/PostList";

// TODO: 本文の余白の見直し
// TODO: プロフィールのSNS icon
// TODO: footer の作成
// TODO: ロゴ作成
// TODO: 本文の画像埋め込み実装

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={posts} />
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
