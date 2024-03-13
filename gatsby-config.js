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
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TWENTY SIX CLUB OFFICIAL WEBSITE`,
        short_name: `TWENTY SIX CLUB`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
