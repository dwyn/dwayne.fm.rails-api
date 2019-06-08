const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/pages/about.jsx"))),
  "component---src-templates-index-jsx": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/index.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/tag.jsx"))),
  "component---src-templates-category-jsx": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/category.jsx"))),
  "component---src-templates-author-jsx": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/author.jsx")))
}

