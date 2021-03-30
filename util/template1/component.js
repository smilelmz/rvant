module.exports = (componentName) => ({
  content: `import React from 'react'
import { ${componentName}Props } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('${componentName.toLowerCase()}')
const ${componentName}: React.FC<${componentName}Props> = ({}) => {
  return (
    <div className={bem('${componentName.toLowerCase()}')}>
      123456
    </div>
  )
}
export default ${componentName}
`,
  extension: `.tsx`
})
