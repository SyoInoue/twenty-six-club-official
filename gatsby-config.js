module.exports = {
  siteMetadata: {
    title: `TWENTY SIX CLUB OFFICIAL WEBSITE`,
    author: `Syo Inoue`,
    description: `TWENTY SIX CLUB OFFICIAL WEBSITE`,
    siteUrl: `https://www.twentysixclub.jp`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      resolve: `gatsby-plugin-robots-txt`,
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/tsc-logo-favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
