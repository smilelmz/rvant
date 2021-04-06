import React from 'react'
import { render } from '@testing-library/react'
import Progress from '.'
import { ProgressProps } from './index.types'

describe('Test Component', () => {
  let props: ProgressProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Progress {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Progress')

    expect(component).toHaveTextContent('harvey was here')
  })
})
