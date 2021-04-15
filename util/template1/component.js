module.exports = (componentName) => ({
  content: `import React from 'react'
import { ${componentName}Props } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('${componentName.toLowerCase()}')
const ${componentName} = ({
  style = {},
  className,
}: ${componentName}Props) => {
  return (
    <div style={style} className={\`\${bem()} \${className || ''}\`}>
      123456
    </div>
  )
}
export default ${componentName}
`,
  extension: `index.tsx`
})
