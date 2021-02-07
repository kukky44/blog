const remarkSlug = require("remark-slug");

module.exports = {
  siteMetadata: {
    title: `Kukky designer / developer`,
    author: `Kukky`,
    description: `This is a blog site of Kukky`,
    social: {
      twitter: `kukky_design`,
    },
    categories: [
      {
        name: "Design",
        slug: "design",
        color: "#0c9ee4",
      },
      {
        name: "Develop",
        slug: "develop",
        color: "#f7615f",
      },
      {
        name: "Self",
        slug: "self",
        color: "#ffa22b",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "gatsby-code-title",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: {
                js: "javascript",
              },
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                simple: {
                  classes: "simple",
                  title: "optional",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
                notice: {
                  classes: "notice",
                  title: "optional",
                },
                alert: {
                  classes: "alert",
                  title: "optional",
                },
                imageSmall: {
                  classes: "image-small",
                },
                imageMedium: {
                  classes: "image-medium",
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
        ],
        remarkPlugins: [remarkSlug],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/contents/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kukky | Kukkyのブログ`,
        short_name: `Kukky`,
        start_url: `/`,
        background_color: `#F2F4FB`,
        theme_color: `#F2F4FB`,
        display: `minimal-ui`,
        icon: `src/images/tomoe1.png`,
      },
    },
  ],
};
