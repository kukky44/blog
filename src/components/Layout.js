import React from "react";
import Header from "./header";
import Bio from "./Bio";
import CategoryMenu from "./CategoryMenu";
import TableOfContents from "./TableOfContents";
import Footer from "./Footer";
import TagList from "./TagList";
import { graphql, StaticQuery } from "gatsby";

const Layout = ({ children, catMenu, postPage }) => {
  const location = window.location.pathname; // TODO: search alternative method
  const isPost = postPage ? " postPage" : "";
  let isTable;

  if (postPage) {
    if (Object.keys(postPage.tableOfContents).length) {
      isTable = true;
    } else {
      isTable = false;
    }
  }

  return (
    <StaticQuery
      query={getQuery}
      render={(data) => {
        let tagsGroup = [];
        data.allMdx.edges.forEach((post) => {
          if (post.node.frontmatter.tags) {
            tagsGroup.push(post.node.frontmatter.tags);
          }
        });
        let tagList = [];
        tagsGroup.forEach((tags) => {
          tags.forEach((tag) => {
            tagList.push(tag);
          });
        });
        tagList = [...new Set(tagList)];

        return (
          <div className="layout">
            <Header />
            <div className="contentWrapper">
              {catMenu ? <CategoryMenu location={location} /> : null}
              <div className={"content" + isPost}>
                <main className="content-main">{children}</main>
                {isTable ? (
                  <div className="post-tableOfContent sticky">
                    <div className="post-tableOfContent__title">Contents</div>
                    <TableOfContents
                      className="post-tableOfContent__list"
                      data={postPage.tableOfContents}
                    />
                  </div>
                ) : (
                  <Bio />
                )}
              </div>
            </div>
            <div className="allTags">
              <div className="allTags-title">Tags</div>
              <TagList items={tagList} />
            </div>
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default Layout;

const getQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
