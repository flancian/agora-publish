module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        // basePath: `${__dirname}`,
        contentPath: `${__dirname}/agora`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `An Agora`,
  },
}
