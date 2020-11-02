/* eslint-disable no-empty */
const hljs = require('highlight.js')

module.exports = (str, lang) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str, true).value
    } catch (__) {}
  }

  return ''
}
