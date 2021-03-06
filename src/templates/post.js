import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RelatedPosts from "../components/RelatedPosts";
import TableOfContents from "../components/TableOfContents";
import Img from "gatsby-image";
import TagList from "../components/TagList";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  const scrollOffset = window.innerHeight / 9;

  require("smooth-scroll")('a[href*="#"]', {
    speed: 300,
    offset: scrollOffset,
    easing: "easeInOutCubic",
  });
}

// TODO: コード量減らす

export default ({ data, pageContext }) => {
  const post = data.mdx;
  const {
    title,
    description,
    date,
    category,
    thumbnail,
    tags,
  } = post.frontmatter;

  return (
    <Layout postPage={post}>
      <SEO title={title} description={description || post.excerpt} />
      <div className="flexContent post">
        <div className="flexContent-main">
          <div className="post-wrapper">
            <div className="post-item">
              <div className="post-item__thumb">
                <div className={"post-item__cat " + category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
                <Img
                  className="post-item__thumbImg"
                  fluid={thumbnail.childImageSharp.fluid}
                />
              </div>
              <div className="post-item__infoWrapper">
                <div className="post-item__info">
                  <div className="post-item__date">{date}</div>
                  <h2 className="post-item__title">{title}</h2>
                </div>
                <div className="post-tags">
                  {tags ? <TagList items={tags} /> : null}
                </div>
              </div>
              <div className="post-content">
                {/* <div className="post-tableOfContent forSm">
                  <div className="post-tableOfContent__title">目次</div>
                  <TableOfContents
                    className="post-tableOfContent__list"
                    data={post.tableOfContents}
                  />
                </div> */}
                <MDXRenderer>{post.body}</MDXRenderer>
              </div>
            </div>
          </div>
          <RelatedPosts title={title} cat={category} />
        </div>
        {Object.keys(post.tableOfContents).length ? (
          <div className="post-tableOfContent sticky">
            <div className="post-tableOfContent__title">Contents</div>
            <TableOfContents
              className="post-tableOfContent__list"
              data={post.tableOfContents}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt
      tableOfContents
      frontmatter {
        title
        description
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
`;
