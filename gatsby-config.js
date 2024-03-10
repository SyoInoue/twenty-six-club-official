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
    {
      resolve: `gatsby-plugin-manifest`,
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
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
