const component = require('./component')
const componentTypes = require('./component.types')
const componentTests = require('./component.test')
const componentStyles = require('./component.scss')
const varStyle = require('./vars.scss')

module.exports = [
  component,
  componentTypes,
  componentTests,
  componentStyles,
  varStyle
]
