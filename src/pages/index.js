import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";

// TODO: 本文の余白の見直し
// TODO: 検索機能
// TODO: プロフィールのSNS icon
// TODO: 遷移アニメーション
// TODO: footer の作成
// TODO: ロゴ作成

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges;
  const isCatMenu = true;

  return (
    <Layout catMenu={isCatMenu}>
      <SEO title="Home" />
      <div className="postcards">
        {posts.map(({ node }) => (
          <PostCard key={node.fields.slug} node={node} />
        ))}
      </div>
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
