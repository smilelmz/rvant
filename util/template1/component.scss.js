module.exports = (componentName) => ({
  content: `@import './var.scss';

.#{$base-prefix}${componentName.toLowerCase()} {
}
`,
  extension: `.scss`,
  name: 'index'
})
