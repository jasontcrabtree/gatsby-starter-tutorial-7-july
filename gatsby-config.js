module.exports = {
  siteMetadata: {
    title: `Pandas Eating Boos`,
    description: `A simple description about pandas eating lots...`,
    author: `jtc`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JTCGatsby`,
        short_name: `JTClearnsgatsby`,
        start_url: `/`,
        background_color: `slateblue`,
        theme_color: `slateblue`,
        display: `standalone`,
        icon: `src/images/icon.png`, // relative to site root
      },
    },
  ],
}
