const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return await graphql(`
    {
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
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.edges;

    // Create category posts page
    // ref: https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
    let categories = [];
    posts.forEach((post) => {
      if (post.node.frontmatter.category) {
        categories.push(post.node.frontmatter.category);
      }
    });
    categories = new Set(categories);
    categories.forEach((category) => {
      createPage({
        path: `/category/${category}`,
        component: path.resolve("./src/templates/categories.js"),
        context: {
          category,
        },
      });
    });

    // Create tags posts page
    let tagsGroup = [];
    posts.forEach((post) => {
      if (post.node.frontmatter.tags) {
        tagsGroup.push(post.node.frontmatter.tags);
      }
    });
    let tagList = [];
    tagsGroup.forEach((tags) => tags.forEach((tag) => tagList.push(tag)));
    tagList = new Set(tagList);
    tagList.forEach((tag) => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve("./src/templates/tags.js"),
        context: {
          tag,
        },
      });
    });

    posts.forEach((post, index) => {
      createPage({
        path: `${post.node.fields.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: post.node.fields.slug,
        },
      });
    });
  });
};
