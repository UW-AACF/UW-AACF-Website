/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
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
  ],
  
}
