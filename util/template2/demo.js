module.exports = (componentName, oName) => ({
  content: `import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import ${componentName} from '@/components/${componentName}'
import './index.scss'
  
const ${componentName}Demo = () => {
  return (
    <MobileLayout title='${componentName}' className='demo-${oName.toLowerCase()}'>
      <DemoBlock title='demo1'>
        <${componentName} />
      </DemoBlock>
    </MobileLayout>
  )
}

export default ${componentName}Demo
  `,
  extension: `demo.tsx`
})
