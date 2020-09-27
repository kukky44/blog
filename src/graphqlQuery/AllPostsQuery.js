import { graphql } from "gatsby";

const allPostsQuery = graphql`
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
            tags
            category
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

export default allPostsQuery;
