const MarkdownIt = require('markdown-it')
const highlight = require('./highlight')
const linkOpen = require('./link-open')
const cardWrapper = require('./card-wrapper')

module.exports = (source) => {
  const parser = new MarkdownIt({
    html: true,
    highlight
  })
  linkOpen(parser)
  let content = parser.render(source)
  content = cardWrapper(content)
  return content
}
