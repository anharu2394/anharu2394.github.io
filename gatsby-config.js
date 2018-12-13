module.exports = {
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/blog`,
      name: "blog",
     },
     },
     {
     resolve: 'gatsby-transformer-remark',
      options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1080,
          },
        },
      ] // just in case those previously mentioned remark plugins sound cool :)
      }
     },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Anharu Portfolio',
    description: 'JCエンジニアAnharuのPortfolioです。',
    keywords: 'Anharu, portfolio, personal website',
    url: 'http://anharu2394.github.io'
  }
};
