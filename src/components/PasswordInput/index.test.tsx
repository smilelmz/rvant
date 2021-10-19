import React from 'react'
import { render } from '@testing-library/react'
import PasswordInput from '.'
import { PasswordInputProps } from './types'

describe('Test Component', () => {
  let props: PasswordInputProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<PasswordInput {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('PasswordInput')

    expect(component).toHaveTextContent('harvey was here')
  })
})
