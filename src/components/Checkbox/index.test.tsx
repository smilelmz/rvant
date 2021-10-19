import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from '.'
import { CheckboxProps } from './types'

describe('Test Component', () => {
  let props: CheckboxProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Checkbox {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Checkbox')

    expect(component).toHaveTextContent('harvey was here')
  })
})
