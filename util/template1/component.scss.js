module.exports = (componentName) => ({
  content: `@import '../style/vars.scss';

.#{$base-prefix}${componentName.toLowerCase()} {
}
`,
  extension: `.scss`
})
