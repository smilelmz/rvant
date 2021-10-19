import React from 'react'
import { render } from '@testing-library/react'
import Toast from '.'
import { ToastProps } from './types'

describe('Test Component', () => {
  let props: ToastProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Toast {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Toast')

    expect(component).toHaveTextContent('harvey was here')
  })
})
