import React from 'react'
import { render } from '@testing-library/react'
import Divider from '.'
import { DividerProps } from './types'

describe('Test Component', () => {
  let props: DividerProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Divider {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Divider')

    expect(component).toHaveTextContent('harvey was here')
  })
})
