import React from 'react'
import { render } from '@testing-library/react'
import RadioGroup from '.'
import { RadioGroupProps } from './types'

describe('Test Component', () => {
  let props: RadioGroupProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<RadioGroup {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('RadioGroup')

    expect(component).toHaveTextContent('harvey was here')
  })
})
