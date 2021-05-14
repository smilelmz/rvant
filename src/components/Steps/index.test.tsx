import React from 'react'
import { render } from '@testing-library/react'
import Steps from '.'
import { StepsProps } from './index.types'

describe('Test Component', () => {
  let props: StepsProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Steps {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Steps')

    expect(component).toHaveTextContent('harvey was here')
  })
})
