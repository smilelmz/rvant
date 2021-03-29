module.exports = (componentName) => ({
  content: `@import './vars.scss';

.#{$base-prefix}${componentName.toLowerCase()} {
}
`,
  extension: `.scss`
})
