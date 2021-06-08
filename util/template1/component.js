module.exports = (componentName) => ({
  content: `import React from 'react'
import { ${componentName}Props } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('${componentName.toLowerCase()}')
const ${componentName} = (fieldProps: ${componentName}Props) => {
  const props: ${componentName}Props = {
    style: {},
    className: '',
    ...fieldProps
  }
  const { style, className } = props
  return (
    <div style={style} className={\`\${bem()} \${className || ''}\`}>
      123456
    </div>
  )
}
export default React.memo(${componentName})
`,
  extension: `index.tsx`
})
