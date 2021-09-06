module.exports = function (eleventyConfig) {
  // Browser Sync
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\/image\/(\d+)(x)?(\d+)?/g,
      replace: '/images'
    }],
    serveStatic: ['public'],
    serveStaticOptions: {
      extensions: ['html']
    }
  })

  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'))
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'))

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date'))
  eleventyConfig.addFilter('fixed', require('./lib/filters/fixed'))
  eleventyConfig.addFilter('includes', require('./lib/filters/includes'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'))
  eleventyConfig.addFilter('slug', require('./lib/filters/slug'))
  eleventyConfig.addFilter('sort', require('./lib/filters/sort'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/filters/total-from-rows'))
  eleventyConfig.addFilter('widont', require('./lib/filters/widont'))
  eleventyConfig.addFilter('console', require('./lib/filters/console'))
  eleventyConfig.addFilter('find', require('./lib/filters/find'))

  // shortcodes
  eleventyConfig.addNunjucksShortcode("govuk", require('./lib/shortcodes/govuk-component'))

  // Creates a 'collection' of guidance content but only those that are not set to be hidden
   eleventyConfig.addCollection('guidance', collection => {
    return [...collection.getFilteredByGlob('./app/content/guidance/*.md').filter(function(item) {
      return item.data.hidden === false
    })].reverse();
  });


  // Creates a 'collection' of projects but only those that are not set to be hidden
  eleventyConfig.addCollection('projects', collection => {
    return [...collection.getFilteredByGlob('./app/content/project/*.md').filter(function(item) {
      return item.data.hidden === false
    })].reverse();
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/admin/**/*.!(njk)') // exclude nunjucks templates
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })
  eleventyConfig.addPassthroughCopy({ './app/images': './assets/images' })

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true)

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['njk', 'md'],
    passthroughFileCopy: true
  }
}
