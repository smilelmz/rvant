/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = (componentName, _oName) => ({
  content: `import React from 'react'
import { DocPanel } from '@/doc'
import markdown from '../../markdown'
import md from './README.zh-CN.md'

const ${componentName}Doc = () => {
  return <DocPanel html={markdown(md)} />
}

export default ${componentName}Doc
  `,
  extension: `index.tsx`
})
