module.exports = (componentName) => ({
  content: `import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { ${componentName}Props } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('${componentName.toLowerCase()}')
const ${componentName}: React.FC<${componentName}Props> = ({}) => {
  const className = bem('${componentName.toLowerCase()}')
  return (
    <div className={className}>
      123456
    </div>
  )
}
export default ${componentName}
`,
  extension: `.tsx`
})
