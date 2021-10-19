import React from 'react'
import { render } from '@testing-library/react'
import Circle from '.'
import { CircleProps } from './types'

describe('Test Component', () => {
  let props: CircleProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Circle {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Circle')

    expect(component).toHaveTextContent('harvey was here')
  })
})
