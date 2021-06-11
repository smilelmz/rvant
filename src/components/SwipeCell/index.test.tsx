import React from 'react'
import { render } from '@testing-library/react'
import SwipeCell from '.'
import { SwipeCellProps } from './index.types'

describe('Test Component', () => {
  let props: SwipeCellProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<SwipeCell {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('SwipeCell')

    expect(component).toHaveTextContent('harvey was here')
  })
})
