module.exports = {
  siteMetadata: {
    title: 'Austere',
  },
  plugins: [
    {
      resolve: `gatsby-theme-austere`,
      options: {
        basePath: '/writing',
      },
    },
    'gatsby-plugin-theme-ui',
  ],
}
