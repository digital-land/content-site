const nunjucks = require('../libraries/nunjucks')
module.exports = function(params) {
  return nunjucks.render(`govuk/components/${params.component}/template.njk`, { params })
}
