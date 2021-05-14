import React from 'react'
import { render } from '@testing-library/react'
import Step from '.'
import { StepProps } from './index.types'

describe('Test Component', () => {
  let props: StepProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Step {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Step')

    expect(component).toHaveTextContent('harvey was here')
  })
})
