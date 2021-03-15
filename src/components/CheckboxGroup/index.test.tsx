import React from 'react'
import { render } from '@testing-library/react'
import CheckboxGroup from '.'
import { CheckboxGroupProps } from './index.types'

describe('Test Component', () => {
  let props: CheckboxGroupProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<CheckboxGroup {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('CheckboxGroup')

    expect(component).toHaveTextContent('harvey was here')
  })
})
