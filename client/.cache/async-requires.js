// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-jsx": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/index.jsx" /* webpackChunkName: "component---src-templates-index-jsx" */),
  "component---src-templates-post-jsx": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-tag-jsx": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */),
  "component---src-templates-category-jsx": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/category.jsx" /* webpackChunkName: "component---src-templates-category-jsx" */),
  "component---src-templates-author-jsx": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/author.jsx" /* webpackChunkName: "component---src-templates-author-jsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/dwyn/Development/code.2/dwayne.FM.rails/client/.cache/data.json")

