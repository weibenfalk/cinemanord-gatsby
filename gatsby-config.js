module.exports = {
  pathPrefix: `/gatsby-cn`,
  siteMetadata: {
    title: `Cinemanord`,
    description: `Cinemanord is an awesome company!`,
    author: `@weibenfalk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `cinemanord-webpage`,
        short_name: `cinemanord`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/cn-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: [
          '/wp/v2/users/**',
          '/wp/v2/settings*',
          '/wp/v2/themes*',
        ],
        baseUrl: 'weibenfalk.com/cinemanord',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://weibenfalk.com/cinemanord',
          replacementUrl: '',
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Quicksand',
            variants: ['200', '400', '500', '600', '700'],
          },
          // {
          //   family: 'Glegoo',
          //   variants: ['200', '400', '500', '600', '700'],
          // },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
