module.exports = {
  siteMetadata: {
    title: `Cariadmin`,
    description: `Solusi mudah setiap masalah admin marketplace dan toko online. Cari admin marketplace, admin sosial media, admin website sampai admin balas chat.`,
    author: `@cariadmin`,
    siteUrl: `https://cariadmin.com/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    'gatsby-plugin-scroll-reveal',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['DM Sans']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cariadmin-website`,
        short_name: `cariadmin`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
