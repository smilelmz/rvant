module.exports = (componentName) => ({
  content: `import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { ${componentName}Props } from './index.types'
import classnames from '../utils/classNames'

const baseClass = \`\${BASE_PREFIX}${componentName.toLowerCase()}\`
const ${componentName}: React.FC<${componentName}Props> = ({}) => {
  const className = classnames(baseClass)
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
