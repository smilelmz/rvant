import React from 'react'
import { render } from '@testing-library/react'
import Overlay from '.'
import { OverlayProps } from './index.types'

describe('Test Component', () => {
  let props: OverlayProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Overlay {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Overlay')

    expect(component).toHaveTextContent('harvey was here')
  })
})
