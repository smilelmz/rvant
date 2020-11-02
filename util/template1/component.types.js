module.exports = (componentName) => ({
  content: `export interface ${componentName}Props {
}
`,
  extension: `.types.ts`
})
