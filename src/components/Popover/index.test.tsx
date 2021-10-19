import React from 'react'
import { render } from '@testing-library/react'
import Popover from '.'
import { PopoverProps } from './types'

describe('Test Component', () => {
  let props: PopoverProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Popover {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Popover')

    expect(component).toHaveTextContent('harvey was here')
  })
})
