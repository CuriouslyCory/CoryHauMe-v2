module.exports = {
  siteMetadata: {
    // edit below
    title: `My Personal Developer Website`,
    author: `Cory Sougstad`,
    description: `Just who I am.`,
    siteUrl: `https://cory.hau.me/`,
    social: {
      twitter: `CuriouslyCory`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cory Sougstad Web Developer`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#1e1e1e`,
        theme_color: `#dfdad7`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/gatsby-icon.png`,
      },
    },
  ],
}
