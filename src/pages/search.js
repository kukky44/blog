import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import SearchForm from "../components/SearchForm";
import getSearchData from "../module/getSearchData";
import getSearchResult from "../module/getSearchResult";

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

  const searchData = getSearchData({ postData });
  let resultPosts = [];
  let isEmpty = false;
  let searchQuery = new URLSearchParams(location.search).get("keywords") || "";
  if (searchQuery) {
    resultPosts = getSearchResult({
      query: searchQuery,
      posts: postData,
      search: searchData,
    });
    if (resultPosts.length === 0) isEmpty = true;
  }

  return (
    <Layout location={location}>
      <SEO title="Search" />
      <div className="searchWrapper">
        <div className="search">
          <SearchForm location={location} searchData={searchData} />
          <div className="search-result">
            {resultPosts.length ? (
              <div className="postcards">
                {resultPosts.map(({ node }) => (
                  <PostCard key={node.fields.slug} node={node} />
                ))}
              </div>
            ) : isEmpty ? (
              "no posts..."
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
