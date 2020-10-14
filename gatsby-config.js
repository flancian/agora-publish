module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        // basePath: `${__dirname}`,
        contentPath: `${__dirname}/agora/garden/flancian/`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `An Agora`,
    author: `the Agoreans`,
  },
}
