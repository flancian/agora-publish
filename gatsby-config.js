module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        // basePath: `${__dirname}`,
        contentPath: `${__dirname}/agora/`,
        rootNote: `/README`,
      },
    },
  ],
  siteMetadata: {
    title: `An Agora`,
    author: `the Agoreans`,
  },
}
