/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:"/UW-AACF-Website",
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `AACF UW Website`,
        short_name: `aacf uw`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1F419B`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem', /* source content from our md files */
      options: {
          name: 'src',
          path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem', /* source content from our img files */
      options: {
          name: 'images',
          path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
           `Roboto`,
           `Lato`,
           `Oswald\:200,300,400,400i,500,600,700`,
           'Montserrat'
        ],
        display: 'swap'
      }
    }    
  ],
  siteMetadata: {
    title: 'AACF UW',
    footer1: 'Made with God`s ❤️ by AACF UW',
    footer2: 'Copyright © 2024, Asian American Christian Fellowship at University of Washington - Seattle Campus'
    //social media, emails, etc.
  }
  
}
