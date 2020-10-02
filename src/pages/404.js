import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Page not found" />
      <div>Page not found</div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
