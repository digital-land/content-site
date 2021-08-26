/**
 * This is a shortcode for rendering GOVUK components within the body of markdown
 * it takes a parameters object which must have the component attribute and directory
 * of the GOVUK Component, for example:
 * { component: 'warning-text', text: 'Text here', etc: 'etc' }
 * To use the short code you would use:
 * {% govuk component="warning-text", text="Text here", summary%}
 */

/**
 * Requires our custom Nunjucks Environment which has been set to find
 * where the GOVUK Frontend components are.
 */
const nunjucks = require('../libraries/nunjucks')
/**
 *
 * @param {Object} params The object being passed to the nunjucks component
 * @returns string of rendered markup
 */
module.exports = function(params) {
  return nunjucks.render(`govuk/components/${params.component}/template.njk`, { params })
}
