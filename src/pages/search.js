import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import Fuse from "fuse.js";

const Search = ({ location }) => {
  const queryData = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              rawBody
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
    `
  );

  const postData = queryData.allMdx.edges;

  const [resultPosts, setResults] = useState([]);
  const [isEmpty, setIsempty] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value;
    if (query) {
      const options = {
        keys: [
          {
            name: "node.frontmatter.title",
            weight: 2,
          },
          {
            name: "node.frontmatter.description",
            weight: 1,
          },
          {
            name: "node.rawBody",
            weight: 0.5,
          },
        ],
      };
      const fuse = new Fuse(postData, options);
      const result = fuse.search(query);
      setResults(result);
      if (resultPosts.length === 0) setIsempty(true);
    } else {
      setIsempty(false);
      setResults([]);
    }
  };

  return (
    <Layout location={location}>
      <SEO title="Search" />
      <div className="searchWrapper">
        <div className="search">
          <div className="searchFormWrapper">
            <div className="searchForm">
              <input
                type="text"
                className="searchForm-input"
                autoComplete="off"
                placeholder="Search..."
                onChange={handleChange}
                autoFocus={true} // eslint-disable-line
              />
            </div>
          </div>
          <div className="search-result">
            {resultPosts.length ? (
              <div className="postcards">
                {resultPosts.map((data) =>
                  data === undefined ? (
                    ""
                  ) : (
                    <PostCard
                      key={data.item.node.fields.slug}
                      node={data.item.node}
                    />
                  )
                )}
              </div>
            ) : isEmpty ? (
              <div className="search-noPost">No results</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
