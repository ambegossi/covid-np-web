module.exports = {
  siteMetadata: {
    title: `Covid-19 Nova Prata - RS`,
    description: `Website de informações sobre o novo coronavírus na cidade de Nova Prata, Rio Grande do Sul.`,
    author: `@gatsbyjs`,
    siteUrl: `https://covidnovaprata.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F9A340`,
        theme_color: `#F9A340`,
        display: `minimal-ui`,
        icon: `src/images/logo-np.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
