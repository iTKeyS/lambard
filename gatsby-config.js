/**
 * Конфигурацию файла читать здесь.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "avtolombardirk",
    titleTemplate: "%s | Автоломбард займ под ПТС",
    description: "Деньги под залог ПТС и недвижимости г.Иркутск",
    siteUrl: "https://inspiring-nightingale-e52766.netlify.app/",
    author: "iTKeyS",
    authorSite: "https://itkeys.xyz",
    image: "/",
    twitterUsername: "@iTkeyS",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
