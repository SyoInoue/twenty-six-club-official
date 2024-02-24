module.exports = {
  siteMetadata: {
    title: 'TWENTY SIX CLUB OFFICIAL WEBSITE',
    author: 'Syo Inoue',
    description: 'TWENTY SIX CLUB OFFICIAL WEBSITE',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/tsc-logo-favicon.png',
      },
    },
    'gatsby-plugin-sass',
  ],
}
