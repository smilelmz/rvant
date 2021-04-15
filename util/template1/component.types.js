module.exports = (componentName) => ({
  content: `export interface ${componentName}Props {
  style?: Record<string, string | number>
  className?: string
}
`,
  extension: `.types.ts`,
  name: 'index'
})
