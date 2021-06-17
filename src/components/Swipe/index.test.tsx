import React from 'react'
import { render } from '@testing-library/react'
import Swipe from '.'
import { SwipeProps } from './index.types'

describe('Test Component', () => {
  let props: SwipeProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Swipe {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Swipe')

    expect(component).toHaveTextContent('harvey was here')
  })
})
