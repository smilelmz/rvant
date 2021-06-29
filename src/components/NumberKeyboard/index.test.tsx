import React from 'react'
import { render } from '@testing-library/react'
import NumberKeyboard from '.'
import { NumberKeyboardProps } from './index.types'

describe('Test Component', () => {
  let props: NumberKeyboardProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<NumberKeyboard {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('NumberKeyboard')

    expect(component).toHaveTextContent('harvey was here')
  })
})
