var plugins = [{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":1400,"linkImagesToOriginal":false,"withWebp":{"quality":80}},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  limit: 1000,\n                  sort: { order: DESC, fields: [frontmatter___date] }\n                  filter: { frontmatter: { draft: { ne: true } } }\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                        description\n                        tags\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml"}],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                author\n                email\n                description\n                language\n                siteUrl\n                keywords\n              }\n            }\n          }\n        "},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Quicksand","variants":["300","400","500","700"]}]},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Dev Blog by Dennis Morello","short_name":"Dev Blog","start_url":"/","background_color":"#ffffff","theme_color":"#363636","display":"minimal-ui","icon":"content/assets/logo-1024.png","include_favicon":true,"crossOrigin":"use-credentials"},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dwyn/Development/code.2/dwayne.FM.rails/client/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
