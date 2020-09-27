import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import SEO from "../components/SEO";

const Categories = ({ pageContext, data }) => {
  const posts = data.allMdx.edges;
  // get Category name from category slug
  const categorySlug = pageContext.category;
  const categoryObject = data.site.siteMetadata.categories.find((cat) => {
    return cat.slug === categorySlug;
  });
  // use slug when name doesn't exist
  const categoryName = categoryObject ? categoryObject.name : categorySlug;

  const isCatMenu = true;

  return (
    <Layout catMenu={isCatMenu}>
      <SEO title={categoryName} />
      <div className="postcards">
        {posts.map(({ node }) => {
          return <PostCard key={node.fields.slug} node={node} />;
        })}
      </div>
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query BlogPostByCategory($category: String) {
    site {
      siteMetadata {
        categories {
          name
          slug
          color
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
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
