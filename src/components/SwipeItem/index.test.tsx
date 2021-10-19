import React from 'react'
import { render } from '@testing-library/react'
import SwipeItem from '.'
import { SwipeItemProps } from './types'

describe('Test Component', () => {
  let props: SwipeItemProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<SwipeItem {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('SwipeItem')

    expect(component).toHaveTextContent('harvey was here')
  })
})
