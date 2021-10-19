import React from 'react'
import { render } from '@testing-library/react'
import Popup from '.'
import { PopupProps } from './types'

describe('Test Component', () => {
  let props: PopupProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Popup {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Popup')

    expect(component).toHaveTextContent('harvey was here')
  })
})
