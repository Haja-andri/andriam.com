module.exports = {
  siteMetadata: {
    title: `Haja Andriamaro Blog and Learnings`,
    name: `Haja Andriamaro`,
    siteUrl: `https://www.andriam.com`,
    description: `On this blog I share my learning journey, the struggles and breakthrough as Fullstack Web developper`,
    hero: {
      heading: `Shared learning, pains and gains.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/haja_andriam`,
      },
      {
        name: `github`,
        url: `https://github.com/Haja-andri`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/haja-andriamaro/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haja publication`,
        short_name: `Haja`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/h-logo.png`,
      },
    },
  ],
};