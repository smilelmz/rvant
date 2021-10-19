module.exports = (componentName) => ({
  content: `import React from 'react'
import { render } from '@testing-library/react'
import ${componentName} from '.'
import { ${componentName}Props } from './types'

describe('Test Component', () => {
  let props: ${componentName}Props

  beforeEach(() => {
    props = {
    }
  })

  const renderComponent = () => render(<${componentName} {...props} />)

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId('${componentName}')

    expect(component).toHaveTextContent('harvey was here')
  })
})
`,
  extension: `index.test.tsx`
})
