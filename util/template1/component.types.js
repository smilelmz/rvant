module.exports = (componentName) => ({
  content: `export type ${componentName}Props = {
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'>
`,
  extension: `types.d.ts`
})
