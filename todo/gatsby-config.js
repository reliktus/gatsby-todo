/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        // siteUrl: required (Gotcha: do not include a trailing slash at the end)
        siteUrl: 'http://localhost:8000',
        menuLinks: [
            {
                name: 'home',
                link: '/'
            },
            {
                name: 'about',
                link: '/about'
            }
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                // useAutoGen: required 'true' to use autogen
                useAutoGen: true,
                // autoGenHomeLabel: optional 'Home' is default
                autoGenHomeLabel: `Home`,
                // exlude: optional, include this array to overwrite paths you don't want to
                // generate breadcrumbs for.
                exclude: [
                    `/dev-404-page/`,
                    `/404/`,
                    `/404.html`,
                    `/offline-plugin-app-shell-fallback/`
                ],
                // crumbLabelUpdates: optional, update specific crumbLabels in the path
                crumbLabelUpdates: [
                    {
                        pathname: '/book',
                        crumbLabel: 'Books'
                    }
                ],
                // trailingSlashes: optional, will add trailing slashes to the end
                // of crumb pathnames. default is false
                trailingSlashes: true,
                // usePathPrefix: optional, if you are using pathPrefix above
                usePathPrefix: '/blog'
            }
        }
    ],
    pathPrefix: '/gatsby-TODO'
};
